import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommentListComponent from '../components/comment'
import Dashboard from '../components/dashboard'
import Header from '../components/header'
import ModalDialogs from '../components/modal'
import Notification from '../components/notification'
import PostListComponent from '../components/post'
import Progress from '../components/progress'
import TodoListComponent from '../components/todo'

const AppRouting = () => {
    const routes = [
        { path: '/', element: <Dashboard /> },
        { path: '/posts', element: <PostListComponent /> },
        { path: '/comments', element: <CommentListComponent /> },
        { path: '/todos', element: <TodoListComponent /> },
        { path: '/add', element: <ModalDialogs /> },
        { path: '/update', element: <ModalDialogs /> },

    ]
    return (<BrowserRouter>
        <Header />
        <Progress />
        <Notification />
        <div style={{ padding: 5 }}>
            <Routes>
                {routes.map(route => <Route key={route.path} {...route} />)}
            </Routes>
        </div>
    </BrowserRouter>
    )
}
export default AppRouting