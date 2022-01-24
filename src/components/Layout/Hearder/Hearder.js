import React, {useState} from 'react';
import './Hearder.css';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export default function Header(props) {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 0 }}>
			<AppBar position='static' color='grey' elevation={0}>
				<Toolbar>
					<Typography variant='h6' className='Type'>
						<Link to='/'>
							<a>MaturDev</a>
						</Link>
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: {xs: 'none', md: 'flex' } }}>
						<Link to='/blogs'>
							<a className='MyMenu'>
								<Typography
									sx={{
										display: {
											xs: 'none',
											sm: 'block'
											// marginRight: 4 + 'px'
										}
									}}
								>
									Blog
								</Typography>
							</a>
						</Link>

						<Link to='/contact'>
							<a className='MyMenu'>
								<Typography
									sx={{
										display: {
											xs: 'none',
											sm: 'block'
											// marginRight: 4 + 'px'
										}
									}}
								>
									Contact
								</Typography>
							</a>
						</Link>
						<Link
							opened={props.open}
							onClick={props.clicked}
							to='/dataform'
						>
							<a className='MyMenu'>
								{' '}
								<Typography
									sx={{
										display: {
											xs: 'none',
											sm: 'block'
											// marginRight: 4 + 'px'
										}
									}}
								>
									Sign IN
								</Typography>
							</a>
						</Link>
					</Box>
					<Box
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					/>
					<Box
						sx={{
							display: { xs: 'flex', md: 'none' }
						}}
					>
						<IconButton
							size='large'
							edge='end'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}
						>
							<MenuIcon onClick={handleMenu} />
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem className='MyMenu' onClick={handleClose}>
									<Link to='/blogs'>Blog</Link>
								</MenuItem>
								<MenuItem className='MyMenu' onClick={handleClose}>
									<Link to='/contact'>Contact</Link>
								</MenuItem>
								<MenuItem className='MyMenu' onClick={handleClose}>
									<Link
										opened={props.open}
										onClick={props.clicked}
										to='/dataform'
									>
										Sign IN
									</Link>
								</MenuItem>
							</Menu>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
