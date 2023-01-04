import { AccountCircle } from '@mui/icons-material';
import { Box, Card, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../Hooks/useWindowSize';

import Logo from '../Assets/Logo.png'

const Sidebar = () => {
  const navigate = useNavigate()
  const {width} = useWindowSize()
  console.log(width)

  const [anchorEl, setAnchorEl] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () =>{
    navigate('/login')
    return localStorage.removeItem('userData')
  }
  return (
    <div>
    {width > 1100 && <Box sx={{height:'100vh', p:5,width:'200px', backgroundColor:'primary.main',position:'fixed'}}>
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
      </Stack>
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
    </Box>}
    </div>
  )
}

export default Sidebar