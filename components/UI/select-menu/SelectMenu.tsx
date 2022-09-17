

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'


const SelectMenu: React.FC<{
    minWidthBox: number, TitleLabel: string, MenuItemList: { value: string, title: string }[], kanbanStatus: string, setKanbanStatus: (status: string) => void

}> = ({ minWidthBox, TitleLabel, MenuItemList, kanbanStatus, setKanbanStatus }) => {

    const handleChange = (event: SelectChangeEvent) => {
        setKanbanStatus(event.target.value as string)
    }

    return (
        <Box sx={{ minWidth: { minWidthBox } }}>
            <FormControl fullWidth>
                <InputLabel id="simple-select-label">{TitleLabel}</InputLabel>
                <Select
                    labelId="imple-select-label"
                    id="demo-simple-select"
                    value={kanbanStatus}
                    label={TitleLabel}
                    onChange={handleChange}
                >

                    {MenuItemList && MenuItemList.map((item) => (
                        <MenuItem key={item.value} value={item.value}>{item.title}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectMenu