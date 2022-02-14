import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createTodo, updateTodoById } from "../../apis/todo";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const initialValue = {
    user_id: 2904,
    title: '',
    due_on: '',
    status: ''
}
const CreateTodoComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { state } = useLocation()
    const [formData, setFormData] = useState(state ? state : initialValue)

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const reset = () => {
        setFormData(initialValue)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        navigate('/Guardian-app/todos')
        if (state) {
            updateTodoById(dispatch, formData)
        } else {
            createTodo(dispatch, formData)
        }
        reset()


    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField fullWidth margin="dense" name="title"
                label="Title" variant="outlined" placeholder="Enter title"
                value={formData.title}
                onChange={onChange} required />
            <TextField type="date" fullWidth margin="dense"
                InputLabelProps={{ shrink: true }}
                name="due_on" label="Due On"
                variant="outlined" placeholder="Enter due on"
                value={formData.due_on}
                onChange={onChange} required />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.status}
                    name="status"
                    label="Status"
                    onChange={onChange}
                >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                </Select>
            </FormControl>
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

export default CreateTodoComponent;