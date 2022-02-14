import { List, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Search from '../search'
import { deleteTodoById } from '../../apis/todo'
import { useNavigate } from 'react-router-dom'
import Item from '../item'

const TodoListComponent = () => {
    const navigate = useNavigate()
    const { todos } = useSelector(state => state)
    const [TodoList, setTodoList] = useState(todos)
    const dispatch = useDispatch()
    useEffect(() => {
        setTodoList(todos)
    }, [todos])
    const handleChange = (item) => {
        setTodoList(todos.filter(todo => todo.title.toLowerCase().includes(item.toLowerCase())))
    }
    const deleteTodo = (id) => {
        deleteTodoById(dispatch, id)
    }
    const updateTodo = (todo) => {
        navigate('/update?todo', { state: todo })
    }
    return (<div>

        <Search data={todos} handleChange={handleChange} placeholder="Search todos..." />
        <Typography align='center' variant="h6" style={{ fontWeight: "bold" }} >Todos</Typography>
        <List>
            {TodoList && TodoList.map(todo => <Item data={todo} title={todo.title}
                id={todo.id} key={todo.id}
                deleteItem={deleteTodo} updateItem={updateTodo} />)}
        </List>


    </div >)
}

export default TodoListComponent