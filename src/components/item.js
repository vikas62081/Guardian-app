import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Chip } from '@mui/material';

const Item = ({ data, title, id, secondaryText = null, deleteItem, updateItem }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [actionVisibility, setActionVisibility] = React.useState(false)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleUpdate = (data) => {
        updateItem(data)
        handleClose();
    }
    const handleDelete = (id) => {
        deleteItem(id)
        handleClose();
    }
    const showActionVisibility = () => {
        setActionVisibility(true)
    }
    const closeActionVisibility = () => {
        setActionVisibility(false)
    }
    return (<>
        <ListItem style={{ background: "#1976d21f", margin: 3 }}
            onMouseLeave={closeActionVisibility}
            onMouseEnter={showActionVisibility}
            secondaryAction={<div onClick={handleClick}>
                {actionVisibility ? <IconButton edge="end" aria-label="comments" title='actions'
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <MoreVertIcon />
                </IconButton> : null}
            </div>}
            disablePadding
        >
            <ListItemButton role={undefined} >
                <ListItemText primary={title} secondary={secondaryText} />
                {data.status ? <Chip label={data.status === 'pending' ? 'Pending' : "Completed"} variant="outlined" style={{ width: 90 }}
                    color={data.status === 'pending' ? 'error' : "success"} /> : null}

            </ListItemButton>
        </ListItem>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem onClick={() => handleUpdate(data)}>
                <ListItemIcon>
                    <EditIcon />
                </ListItemIcon>
                Update
            </MenuItem>
            <MenuItem onClick={() => handleDelete(id)}>
                <ListItemIcon>
                    <DeleteForeverIcon />
                </ListItemIcon>
                Delete
            </MenuItem>
        </Menu>
    </>);
}

export default Item