import classes from './Dashboard.module.scss'
import { Chart } from '../../UI/chart/Chart'
import type { ApexOptions } from 'apexcharts'

const ChartByStatus: React.FC<{ classN: string, title: string }> = ({ classN, title }) => {


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
        colors: ['#ff9900', '#1c81c2', '#333', '#5c6ac0'],
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
        labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum'],
        legend: {
            labels: {
            },
            show: false
        },
        stroke: {
            width: 0
        },

    }
    const chartSeries = [10, 20, 25, 45]
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
                    options={chartOptions}
                    series={chartSeries}
                    type="pie"
                />
            </div>
        </div >


    )
}

export default ChartByStatus