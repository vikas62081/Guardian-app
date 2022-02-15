import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import CommentIcon from '@mui/icons-material/Comment';
import ListAltIcon from '@mui/icons-material/ListAlt';
const Dashboard = () => {
    const { posts, comments, todos } = useSelector(state => state)
    const dashList = [
        {
            title: "Todos", color: "#b2b760", count: todos && todos.length,
            description: " ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do",
            to: "/Guardian-app/todos", icon: <ListAltIcon fontSize="large" color='secondary' />
        },
        {
            title: "Comments", color: "#5fb76f", count: comments && comments.length,
            description: "An Instagram Comment is one of the two ways that people engage with the content they see on Instagram",
            to: "/Guardian-app/comments", icon: <CommentIcon fontSize="large" color='secondary' />
        },
        {
            title: "Posts", color: "#e73973", count: posts && posts.length,
            description: " In Later on the web, create a new post or Instagram story, or open a scheduled post or story",
            to: "/Guardian-app/posts", icon: <PostAddIcon fontSize="large" color='secondary' />
        },
    ]
    const dashCard = (item) => {
        return <Card style={{ background: item.color }} >
            <CardContent >
                <ListItem key={item.title} component={Link} to={item.to}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText style={{ fontSize: '150%' }} primary={<Typography variant='h6'>{item.title}</Typography>} />
                </ListItem>
                {/* <Typography component={Link} to={item.to} gutterBottom variant="h6">
                    {item.title}
                </Typography> */}
                <Typography gutterBottom variant="caption1" component="div">
                    Count : {item.count}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
        </Card >
    }
    return (
        <div>
            <Grid container spacing={2}>
                {dashList.map(li => <Grid key={li.title} item sm={4}>{dashCard(li)}</Grid>)}
            </Grid>
        </div>
    )
}

export default Dashboard