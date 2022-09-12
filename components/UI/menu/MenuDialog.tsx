import * as React from 'react'

import { ClickAwayListener, Popper } from '@mui/material'
import classes from './MenuDialog.module.scss'
import { Props } from '../../../service/type'
import DynamicMenuComponent from './DynamicMenuComponent'



interface MyAppProps extends Props {

}

const MenuDialogNew: React.FC<{ anchorElement: HTMLDivElement | HTMLSpanElement, onClose: () => void, menuType: string }> = ({ anchorElement, onClose, menuType}) => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | HTMLSpanElement | null>(anchorElement)



    const handleClose = () => {
        onClose()
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (

        <ClickAwayListener onClickAway={handleClose}>
            <Popper open={open} anchorEl={anchorEl} placement={'bottom-start'} className={classes['menu-dialog']} >
                <div className={classes['dialog-content-wrapper']}>
                    <div className={classes['menu-dialog-inner']}>
                        <DynamicMenuComponent menuType={menuType} />
                    </div>
                </div>
            </Popper>
        </ClickAwayListener>
    )
}

export default MenuDialogNew
