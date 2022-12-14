import Box from '@mui/material/Box'
import Backdrop from '@mui/material/Backdrop'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import { useContext, useState } from 'react'
import SvgIcon from '../svgIcon/SvgIcon'
import { Tooltip, tooltipClasses } from '@mui/material'

// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined'
// import SaveIcon from '@mui/icons-material/Save'
// import PrintIcon from '@mui/icons-material/Print'
// import ShareIcon from '@mui/icons-material/Share'
import { groupMenuIcon, speedDialIcons } from '../../../service/svgIcon'
import classes from './SpeedDialMenu.module.scss'
import { BoardContext } from '../../../store/board'
const actions = [
    { icon: <SvgIcon path={speedDialIcons.newTask} viewBox="0 0 448 512" fill='#fff' />, name: 'New Item', actionType: 'AddNewTask' },
    { icon: <SvgIcon path={speedDialIcons.newGroup} viewBox="0 0 512 512" fill='#fff' />, name: 'New Group', actionType: 'AddNewGroup' },
]


const SpeedDialMenu = () => {

    const { onSaveGroup, addTask, board } = useContext(BoardContext)

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = (actionType?: string) => {
        console.log(actionType)

        if (actionType === 'AddNewGroup') onSaveGroup()
        else if (actionType === 'AddNewTask') {
            const groupId = board?.groups[0].id
            if (groupId) {
                addTask(groupId, 'New item', true)
            }
        }
       


        setOpen(false)
    }

    return (
        <SpeedDial
            ariaLabel="Mobile SpeedDial Menu"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SvgIcon path={speedDialIcons.plusIcon} viewBox="0 0 448 512" classN={open ? classes['speed-dial-rotate'] : classes['speed-dial']} />}
            onClose={() => handleClose()}
            onOpen={handleOpen}
            open={open}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    onClick={() => handleClose(action.actionType)}
                />
            ))}
        </SpeedDial>
    )
}

export default SpeedDialMenu