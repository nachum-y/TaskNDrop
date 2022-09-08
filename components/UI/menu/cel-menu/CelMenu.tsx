import * as React from 'react'
import { positions } from '@mui/system'
import { ClickAwayListener, Popper } from '@mui/material'

import classes from './CelMenu.module.scss'
import DynamicColComponent from '../../../boards/groups/group/DynamicColComponent'
import DynamicCelMenu from './DynamicCelMenu'


type Style = {
    position: string

}




const CelMenu: React.FC<{ anchorElement: HTMLSpanElement, onClose: () => void, menuType: string }> = ({ anchorElement, onClose, menuType }) => {

    const [anchorElCel, setAnchorElCel] = React.useState<HTMLSpanElement | null>(anchorElement)



    const handleClose = () => {
        onClose()
    }

    const open = Boolean(anchorElCel)

    return (

        < ClickAwayListener onClickAway={handleClose} >
            <Popper open={open} anchorEl={anchorElCel} placement={'bottom'} className={classes['menu-dialog']} >
                <div className={classes['status-picker-view']}>
                    <DynamicCelMenu menuType={menuType} />
                </div >
            </Popper >
        </ClickAwayListener >


    )
}

export default CelMenu