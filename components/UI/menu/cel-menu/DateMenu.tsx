
import * as React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'

// import classes from './StatusMenu.module.scss'
import { Col, FullMember, Labels, Member } from '../../../../service/type'




const DateMenu: React.FC<{ onMenuClick: (actionId: string | number | Member[]) => void, menuObj: { boardList: Labels[], celValue: string } }> = ({ onMenuClick, menuObj }) => {


    const { celValue } = menuObj
    const [value, setValue] = React.useState<Dayjs | null>(dayjs(celValue))
    const statusList = menuObj.boardList


    const onClickHandle = (status: string) => {
        onMenuClick(status)
    }


    return (

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                openTo="day"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue)
                    if (newValue) onMenuClick(newValue.valueOf())
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>


    )
}

export default DateMenu