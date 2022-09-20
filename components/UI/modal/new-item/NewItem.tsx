import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useContext, useState } from 'react'
import { BoardContext } from '../../../../store/board'
import CardCellWrap from './CardCellWrap'

export default function FormDialog() {

    const { modal, onSetModal, colsOrderBoard } = useContext(BoardContext)
    const open = modal?.isOpen || false
    const handleClickOpen = () => {
        // setOpen(true)
    }

    const handleClose = () => {
        const newModal = {
            isOpen: false,
            modalType: 'NewItem'
        }

        onSetModal(newModal)
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <div className="top-actions-container">
                    x
                </div>
                <DialogContent>
                    <div className="input-value-text">
                        <span>
                            New Item
                        </span>
                    </div>

                    <div className="card-component">
                        <div className="card-cell-wrapper" id={'loop'} >
                            <div className="column-title">
                                <div className="column-icon">icon</div>
                                <span>value</span>
                            </div>
                            <div className="card-cell-wrapper-component">
                                ....
                            </div>
                        </div>
                    </div>


                    <div className="card-component">
                        {colsOrderBoard && <CardCellWrap
                            colsOrderBoard={colsOrderBoard} />}
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
