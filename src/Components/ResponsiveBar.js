import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useWindowSize } from '../Hooks/useWindowSize';
import { AccountCircle } from '@mui/icons-material';
import Logo from '../Assets/Logo.png'

export default function SwipeableTemporaryDrawer() {
  const navigate = useNavigate()
  const {width} = useWindowSize()

  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOut = () =>{
    navigate('/register')
    return localStorage.removeItem('userData')
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{height:'100vh', p:5,width:'250px', backgroundColor:'primary.main'}}>
      <img width='100px' src={Logo} alt='logo' />
      
      <Stack spacing={2}>
        <Box sx={{p:0.75, borderRadius:'10px'}}>
          <Typography component='h1' variant='h6'><Link to='/dashboard' sx={{color:'#000'}}>Home</Link></Typography>
        </Box>
        <Box sx={{p:0.75, borderRadius:'10px'}}>
          <Typography component='h1' variant='h6'><Link to='/dashboard/kelas' sx={{color:'#000'}}>Class</Link></Typography>
        </Box>
        <Box sx={{p:0.75, borderRadius:'10px'}}>
          <Typography component='h1' variant='h6'><Link to='/dashboard/project' sx={{color:'#000'}}>Project</Link></Typography>
        </Box>
        <Box sx={{paddingLeft:2}}>
      
      <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"

          
        >
          <AccountCircle />
        </IconButton>
      <Menu
      className='hide-scroll'      
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'right',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={logOut}>Log out</MenuItem>
        </Menu>
        </Box>
      </Stack>
      </List>
    </Box>
  );

  return (
    <Box sx={{position:'absolute',top:10, color:'#fff'}}>
        {width<1200 &&<React.Fragment key={<MenuIcon  />}>
          <Button onClick={toggleDrawer(<MenuIcon />, true)}><MenuIcon /></Button>
          <SwipeableDrawer
            open={state[<MenuIcon />]}
            onClose={toggleDrawer(<MenuIcon />, false)}
            onOpen={toggleDrawer(<MenuIcon />, true)}
          >
            {list(<MenuIcon />)}
          </SwipeableDrawer>
        </React.Fragment>}
    </Box>
  );
}