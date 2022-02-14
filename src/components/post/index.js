import { List, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Search from '../search'
import { deletePostById } from '../../apis/post'
import { useNavigate } from 'react-router-dom'
import Item from '../item'


const PostListComponent = () => {
    const navigate = useNavigate()
    const { posts } = useSelector(state => state)
    const [postList, setPostList] = useState(posts)
    const dispatch = useDispatch()
    useEffect(() => {
        setPostList(posts)
    }, [posts])
    const deletePost = (id) => {
        deletePostById(dispatch, id)
    }

    const updatePost = (post) => {
        navigate('/update?post', { state: post })
    }
    const handleChange = (item) => {
        setPostList(posts.filter(post => post.title.toLowerCase().includes(item.toLowerCase())))
    }

    return (
        <div>
            <Search data={posts} searchableField="title" handleChange={handleChange} placeholder="Search posts..." />
            <Typography align='center' variant="h6" style={{ fontWeight: "bold" }} >Posts</Typography>
            <List>
                {postList && postList.map(post => <Item data={post} title={post.title} id={post.id}
                    key={post.id} deleteItem={deletePost} updateItem={updatePost} />)}
            </List>

        </div >
    )
}
export default PostListComponent