import { Chart } from '../../UI/chart/Chart'
import type { ApexOptions } from 'apexcharts'
import classes from './Dashboard.module.scss'
import useCountByLabel from '../../../hooks/useCountByLabel'
import { useEffect, useState } from 'react'
import { Labels } from '../../../service/type'


type StatusCount = {
    id?: number
}

type ColorChart = {
    count: number
    color: string
    labels: string

}[]


type SeriesCount = {
    name: string,
    data: number[],
    color: string
}[]

var chartOptions: ApexOptions = {




    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            // endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Tasks by Status'],
    },
    yaxis: {
        title: {
            text: '(Tasks)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return + val + " Tasks"
            }
        }
    }
}

// const chartSeries = 


const ChartColumn: React.FC<{ classN: string, title: string, labelsVal: Labels[] }> = ({ classN, title, labelsVal }) => {


    const countStatus = useCountByLabel('status')

    const [colors, setColors] = useState<string[]>([])
    const [labels, setLabels] = useState<string[]>([])
    const [chartSeriesNum, setChartSeriesNum] = useState<number[]>([])
    const [chartSeries, setChartSeries] = useState<ApexAxisChartSeries>([])


    useEffect(() => {


        if (countStatus) {


            let colorList: string[] = []
            let LabelList: string[] = []
            let countList: number[] = []

            let seriesCount: ApexAxisChartSeries = []
            labelsVal.forEach(label => {
                seriesCount.push({
                    name: label.title || 'Default',
                    data: [countStatus[label.id as keyof StatusCount] || 0],
                    color: label.color
                })
                colorList.push(label.color)
                LabelList.push(label.title || 'Default')
                countList.push(countStatus[label.id as keyof StatusCount] || 0)

            })
            setColors(() => colorList)
            setLabels(() => LabelList)
            setChartSeriesNum(() => countList)


            setChartSeries(() => seriesCount)


        }

    }, [countStatus])



    return (
        <div className={`${classes['dashboard-item-holder']} ${classes[classN]}`}>
            <div className={classes['dashboard-item-holder-title']} >
                <span>
                    {title}
                </span>
            </div >
            <div className={classes['chart']}>
                {chartSeries && (<Chart
                    height={550}
                    options={chartOptions}
                    series={chartSeries}
                    type="bar"
                />)}
            </div>
        </div >

    )
}

export default ChartColumn