import * as React from 'react'
import { positions } from '@mui/system'
import { ClickAwayListener, Popper } from '@mui/material'

import classes from './StatusMenu.module.scss'
import { Labels } from '../../../../service/type'




const StatusMenu: React.FC<{ onMenuClick: (actionId: string) => void, statusList: Labels[] }> = ({ onMenuClick, statusList }) => {


 


    const onClickHandle = (status: string) => {
        onMenuClick(status)
    }


    return (



        <>
            {statusList.map((status) => (
                <div onClick={() => onClickHandle(status.id)}
                    className={classes['status-picker-view-title']}
                    style={{ backgroundColor: status.color }}
                    key={status.id}
                >
                    <span className={classes['task-label-display']}>{status.title}</span>
                </div>
            ))}

        </>




    )
}

export default StatusMenu