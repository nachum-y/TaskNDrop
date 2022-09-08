import * as React from 'react'
import { positions } from '@mui/system'
import { ClickAwayListener, Popper } from '@mui/material'

import classes from './StatusMenu.module.scss'
import { Col, FullMember, Labels, Member } from '../../../../service/type'




const StatusMenu: React.FC<{ onMenuClick: (actionId: string) => void, menuObj: { boardList: Labels[], celValue: string } }> = ({ onMenuClick, menuObj }) => {



    const statusList = menuObj.boardList



    const onClickHandle = (status: string) => {
        onMenuClick(status)
    }


    return (



        <>
            {statusList && statusList.map((status) => (
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