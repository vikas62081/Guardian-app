import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createComment, updateCommentById } from "../../apis/comment";

const initialValue = {
    name: '',
    email: '',
    body: '',
    post_id: 1426
}
const CreateCommentComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { state } = useLocation()
    const [formData, setFormData] = useState(state ? state : initialValue)

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    const reset = () => {
        setFormData(initialValue)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Guardian-app/comments')
        if (state) {
            updateCommentById(dispatch, formData)
        } else {
            createComment(dispatch, formData)
        }
        reset()


    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField fullWidth margin="dense" id="name"
                label="Name" variant="outlined" placeholder="Enter name"
                value={formData.name}
                onChange={onChange} required />
            <TextField fullWidth type="email" margin="dense" id="email" label="Email"
                variant="outlined" placeholder="Enter email"
                value={formData.email}
                onChange={onChange} required />
            <TextField fullWidth margin="dense" id="body" label="Description"
                variant="outlined" placeholder="Enter description"
                value={formData.body}
                onChange={onChange} required />
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '20ch' },
                }}
            >
                <Button variant="contained" type="submit">{state ? "Update" : "Create"}</Button>
                <Button variant="outlined" onClick={reset}>Reset</Button>

            </Box>
        </form>
    )
}

export default CreateCommentComponent;