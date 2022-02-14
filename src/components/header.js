import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './sidebar';

const Header = () => {
    const { pathname } = useLocation()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const handleToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }
    const addAction = (() => {
        if (pathname === "/posts") return "post";
        else if (pathname === "/comments") return "comment";
        else if (pathname === "/todos") return "todo"
    })()
    return (
        <Box sx={{ flexGrow: 1 }} paddingBottom={1}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: "bold" }}>
                        Guardian App
                    </Typography>
                    {pathname === '/' ? null : <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        title="Add new post"
                        style={{ background: "#eda83c" }}
                        component={Link}
                        to={`/add?${addAction}`} >
                        <AddIcon />
                    </IconButton>}
                </Toolbar>
            </AppBar>
            <Sidebar open={sidebarOpen} handleToggle={handleToggle} />
        </Box >
    );
}
export default Header
