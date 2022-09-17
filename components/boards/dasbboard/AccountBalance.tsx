import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material'
// import TrendingUp from '@mui/icons-material/TrendingUp'
import Text from '../../UI/text/Text'
import { Chart } from '../../UI/chart/Chart'
import type { ApexOptions } from 'apexcharts'

// const AvatarSuccess = styled(Avatar)(
//   ({ theme }) => `
//       background-color: ${theme.colors.success.main};
//       color: ${theme.palette.success.contrastText};
//       width: ${theme.spacing(8)};
//       height: ${theme.spacing(8)};
//       box-shadow: ${theme.colors.shadows.success};
// `
// )

const ListItemAvatarWrapper = styled(ListItemAvatar)(
  ({ theme }) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;

`
)

function AccountBalance() {
  const theme = useTheme()

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
          size: '60%'
        }
      }
    },
    colors: ['#ff9900', '#1c81c2', '#333', '#5c6ac0'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%'
      },
      style: {
        // colors: [theme.colors.alpha.trueWhite[100]]
      },
      background: {
        enabled: true,
        // foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8,
        borderRadius: 4,
        borderWidth: 0,
        opacity: 0.3,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          // color: theme.colors.alpha.black[70],
          opacity: 0.5
        }
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        // color: theme.colors.alpha.black[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum'],
    legend: {
      labels: {
        // colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  }

  const chartSeries = [10, 20, 25, 45]

  return (
    <Card>
      <Chart
        height={250}
        options={chartOptions}
        series={chartSeries}
        type="donut"
      />
    </Card >
  )
}

export default AccountBalance
