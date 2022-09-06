import * as React from 'react'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { ClickAwayListener, Fade, Paper, Popper } from '@mui/material'
import classes from './MenuDialog.module.scss'

import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import GroupMenu from './GroupMenu'
// import Typography from '@mui/material/Typography'
// import ContentCut from '@mui/icons-material/ContentCut'
// import ContentCopy from '@mui/icons-material/ContentCopy'
// import ContentPaste from '@mui/icons-material/ContentPaste'
// import Cloud from '@mui/icons-material/Cloud'

const MenuDialogNew: React.FC<{ anchorElement: HTMLDivElement, onClose: () => void }> = ({ anchorElement, onClose }) => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(anchorElement)



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
                        <div className={classes['menu-section']}>
                            <GroupMenu />
                        </div>
                        <div className={classes['menu-section']}>
                            <GroupMenu />
                            
                        </div>
                    </div>
                </div>
            </Popper>
        </ClickAwayListener>
    )
}

export default MenuDialogNew
