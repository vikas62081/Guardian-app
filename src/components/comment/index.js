import { List, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Search from '../search'
import { deleteCommentById } from '../../apis/comment'
import { useNavigate } from 'react-router-dom'
import Item from '../item'

const CommentListComponent = () => {
    const navigate = useNavigate()
    const { comments } = useSelector(state => state)
    const [commentList, setCommentList] = useState(comments)
    const dispatch = useDispatch()
    useEffect(() => {
        setCommentList(comments)
    }, [comments])
    const handleChange = (item) => {
        setCommentList(comments.filter(comment => comment.body.toLowerCase().includes(item.toLowerCase())))
    }
    const deleteComment = (id) => {
        deleteCommentById(dispatch, id)
    }
    const updateComment = (comment) => {
        navigate('/update?comment', { state: comment })
    }
    return (<div>

        <Search data={comments} handleChange={handleChange} placeholder="Search comments..." />
        <Typography align='center' variant="h6" style={{ fontWeight: "bold" }} >Comments</Typography>
        <List>
            {commentList && commentList.map(comment => <Item data={comment} title={comment.body}
                id={comment.id} key={comment.id}
                deleteItem={deleteComment} updateItem={updateComment} />)}
        </List>

    </div >)
}

export default CommentListComponent