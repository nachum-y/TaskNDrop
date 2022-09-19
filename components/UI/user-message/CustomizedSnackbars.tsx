import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { forwardRef, useState } from 'react'
import { SnacbarUserMessage } from '../../../service/type'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const CustomizedSnackbars: React.FC<{ snacbarUserMessage: SnacbarUserMessage, setSnacbarUserMessage: (setMessage: SnacbarUserMessage) => void }> = ({ snacbarUserMessage, setSnacbarUserMessage }) => {


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setSnacbarUserMessage(null)

    }

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={snacbarUserMessage?.setOpen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {snacbarUserMessage?.message}
                </Alert>
            </Snackbar>

            {/* <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert> */}
        </Stack>
    )
}


export default CustomizedSnackbars 