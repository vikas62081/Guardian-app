import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { EventEmitter } from 'fbemitter'
import { START_PROCESSING, STOP_PROCESSING } from '../utility/contant';

export const processingEmitter = new EventEmitter();

const Progress = () => {
    const [open, setOpen] = useState(false)
    const reset = () => {
        setOpen(false)
    }
    processingEmitter.addListener(START_PROCESSING, () => {
        setOpen(true)
    })
    processingEmitter.addListener(STOP_PROCESSING, () => {
        reset()
    })
    if (!open) {
        return null
    }
    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}>
            <CircularProgress color="secondary" />
        </Backdrop>)
}

export default Progress 
