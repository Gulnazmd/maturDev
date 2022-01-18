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
                <Box>
                    <AppBar position="static"
                        color='grey'
                        elevation={0}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
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
                                </Menu>
                            </IconButton>
                            <Typography className='Type'><Link to="/">MaturDev</Link></Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                <p className='Sign'>
                    <Link opened={props.open} onClick={props.clicked} to="/dataform">Sign IN</Link>
                </p>
            </div>
        )}
