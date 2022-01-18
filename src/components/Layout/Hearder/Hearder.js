import React, {useState} from 'react';
import './Hearder.css';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export default function Header (props) {

        const[ anchorEl, setAnchorEl ] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

        return (
            <div className="Header">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar
                        position="static"
                        alignItems = 'flex-end'
                        color='grey'
                        elevation={0}>
                        <Toolbar >
                        <Typography
                                variant="h6"
                                className='Type'><Link to="/">MaturDev</Link>
                        </Typography>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}>
                                    <MenuIcon onClick={handleMenu} />
                                     <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                      vertical: 'top',
                                      horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}>
                                    <MenuItem className='MyMenu' onClick={handleClose}><Link to="/blogs">Blog</Link></MenuItem>
                                    <MenuItem className='MyMenu' onClick={handleClose}><Link to="/contact">Contact</Link></MenuItem>
                                    <MenuItem className='MyMenu' onClick={handleClose}><Link opened={props.open} onClick={props.clicked} to="/dataform">Sign IN</Link></MenuItem>
                                </Menu>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        )}
