import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { Backdrop, backdropClasses } from '@mui/material'
import classes from './BasicModal.module.scss'
import BoardModal from './board-modal/BoardModal'
import { useContext } from 'react'
import { BoardContext } from '../../../store/board'
import { ModalType, } from '../../../service/type'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const BasicModal: React.FC<{ modalSet: ModalType, setModal: (modalParam: ModalType) => void }> = ({ modalSet, setModal }) => {


    const [open, setOpen] = useState(modalSet?.setOpen || false)

    const handleClose = () => {
        setModal(null)
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal"
            aria-describedby="modal-modal-description"
            className={classes['backdrop-modal']}
        >
            <Box className={classes['modal-box']}>
                <BoardModal />
            </Box>
        </Modal>
    )
}


export default BasicModal