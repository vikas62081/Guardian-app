import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { EventEmitter } from 'fbemitter'
import { ERROR_NOTIFICATION, NOTIFICATION } from '../utility/contant';

export const notificationEmitter = new EventEmitter();

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const reset = () => {
        setOpen(false);
        setMessage('')
        setError(false)
    };
    notificationEmitter.addListener(NOTIFICATION, (msg) => {
        setTimeout(() => reset(), 5000)
        setOpen(true)
        setMessage(msg)
    })
    notificationEmitter.addListener(ERROR_NOTIFICATION, (msg) => {
        setTimeout(() => reset(), 5000)
        setOpen(true)
        setError(true)
        setMessage(msg)
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        reset(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
export default Notification;