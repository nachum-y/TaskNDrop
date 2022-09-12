import * as React from 'react'
import { ClickAwayListener, Popper } from '@mui/material'

import classes from './CelMenu.module.scss'
import DynamicCelMenu from './DynamicCelMenu'
import { Col } from '../../../../service/type'




const CelMenu: React.FC<{ anchorElement: HTMLSpanElement, onClose: () => void, menuType: Col }> = ({ anchorElement, onClose, menuType }) => {

    const [anchorElCel, setAnchorElCel] = React.useState<HTMLSpanElement | null>(anchorElement)



    const handleClose = () => {
        onClose()
    }


    const open = Boolean(anchorElCel)
    const canBeOpen = open && Boolean(anchorElCel)
    const id = canBeOpen ? 'transition-popper' : undefined
    


    return (

        < ClickAwayListener onClickAway={handleClose} >
            <Popper id={id} open={open} anchorEl={anchorElCel} placement={'bottom'} className={classes['menu-dialog']} >
                <div className={classes['status-picker-view']}>
                    <DynamicCelMenu menuType={menuType} />
                </div >
            </Popper >
        </ClickAwayListener >


    )
}

export default CelMenu