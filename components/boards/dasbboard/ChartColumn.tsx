import { Chart } from '../../UI/chart/Chart'
import type { ApexOptions } from 'apexcharts'
import classes from './Dashboard.module.scss'

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
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
}

const chartSeries = [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}]




const ChartColumn: React.FC<{ classN: string, title: string }> = ({ classN, title }) => {
    return (
        <div className={`${classes['dashboard-item-holder']} ${classes[classN]}`}>
            <div className={classes['dashboard-item-holder-title']} >
                <span>
                    {title}
                </span>
            </div >
            <div className={classes['chart']}>
                <Chart
                    height={740}
                    options={chartOptions}
                    series={chartSeries}
                    type="bar"
                />
            </div>
        </div >

    )
}

export default ChartColumn