import classes from './Dashboard.module.scss'
import { Chart } from '../../UI/chart/Chart'
import type { ApexOptions } from 'apexcharts'
import useCountByLabel from '../../../hooks/useCountByLabel'
import { Group, Labels } from '../../../service/type'
import { useEffect, useState } from 'react'

type StatusCount = {
    id?: number
}

type ColorChart = {
    count: number
    color: string
    labels: string

}[]

const ChartByStatus: React.FC<{ classN: string, title: string, status: string, labelsVal: Labels[] }> = ({ classN, title, status, labelsVal }) => {

    const countStatus = useCountByLabel(status)


    const [chart, setChart] = useState<ColorChart>([])
    const [colors, setColors] = useState<string[]>([])
    const [labels, setLabels] = useState<string[]>([])
    const [chartSeries, setChartSeries] = useState<number[]>([])


    useEffect(() => {
        console.log('start here')
        console.log(countStatus)

        if (countStatus) {
            let colorList: string[] = []
            let LabelList: string[] = []
            let countList: number[] = []
            labelsVal.forEach(label => {
                colorList.push(label.color)
                LabelList.push(label.title || 'Default')
                countList.push(countStatus[label.id as keyof StatusCount] || 0)

            })
            setColors(() => colorList)
            setLabels(() => LabelList)
            setChartSeries(() => countList)
        }

    }, [countStatus])

    const chartOptions: ApexOptions = {
        chart: {
            background: 'transparent',
            stacked: false,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '0%'
                }
            }
        },
        // colors: colors,
        dataLabels: {
            enabled: false,
            formatter: function (val) {
                return val + '%'
            },
            background: {
                enabled: true,
                padding: 8,
                borderRadius: 4,
                borderWidth: 0,
                opacity: 0.3,
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 1,
                    opacity: 0.5
                }
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                opacity: 0.5
            }
        },
        fill: {
            opacity: 1
        },
        // labels: labels,
        legend: {
            labels: {
            },
            show: false
        },
        stroke: {
            width: 0
        },

    }
    return (



        <div className={`${classes['dashboard-item-holder']} ${classes[classN]}`}>
            <div className={classes['dashboard-item-holder-title']}>
                <span>
                    {title}
                </span>
            </div>
            <div className={classes['chart']}>
                <Chart
                    height={400}
                    options={{
                        ...chartOptions,
                        colors: colors,
                        labels: labels,
                    }}
                    series={chartSeries}
                    type="pie"
                />
            </div>
        </div >


    )
}

export default ChartByStatus