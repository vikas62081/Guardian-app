import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createPost, updatePostById } from "../../apis/post";

const initialValue = {
    title: '',
    body: ''
}
const CreatePostComponent = () => {
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
        navigate('/Guardian-app/posts')
        if (state) {
            updatePostById(dispatch, formData)
        } else {
            createPost(dispatch, formData)
        }
        reset()


    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField fullWidth margin="dense" id="title"
                label="Title" variant="outlined" placeholder="Enter title"
                value={formData.title}
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

export default CreatePostComponent;