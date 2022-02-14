import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CommentIcon from '@mui/icons-material/Comment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from 'react-router-dom';
const Sidebar = ({ open, handleToggle }) => {
    const options = [{ title: "Dashboard", icon: <DashboardIcon />, to: '/Guardian-app/' },
    { title: "Todo", icon: <ListAltIcon />, to: '/Guardian-app/todos' },
    { title: "Comment", icon: <CommentIcon />, to: '/Guardian-app/comments' },
    { title: "Post", icon: <PostAddIcon />, to: '/Guardian-app/posts' },
    ]
    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        handleToggle();
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
        >
            <List>
                {options.map((option, index) => (
                    <ListItem button key={index} component={Link} to={option.to}>
                        <ListItemIcon>{option.icon}</ListItemIcon>
                        <ListItemText primary={option.title} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={'left'}
                    open={open}
                    onClose={toggleDrawer()}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>

        </div>
    );
}
export default Sidebar