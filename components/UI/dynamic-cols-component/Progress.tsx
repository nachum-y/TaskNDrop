import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress'
import classes from './DateCmp.module.scss'
import { grey } from "@mui/material/colors"

const Progress: React.FC<{ date: number }> = ({ date }) => {

    const [dateValue, setDateValue] = useState<number | undefined>()


    useEffect(() => {
        if (date) {
            setDateValue(() => percentageCalc())
        }
    }, [date])

    const percentageCalc = () => {
        if (Date.now() > date) return 100
        if (date > Date.now() + 604800000) return 0
        let prc = (date - Date.now()) / 604800000
        return Math.round(100 - ((prc) * 100))

    }

    return (
        <CircularProgress variant="determinate" style={{
            width: '14px',
            height: '14px',
            color: 'rgb(93, 99, 135)',
        }} value={dateValue} />

    )
}

export default Progress