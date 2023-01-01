import { Box,Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo.png'

const AdminSidebar = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  return (
    <Box sx={{height:'100vh', p:5,width:'250px', backgroundColor:'primary.main',position:'fixed'}}>
    <img width='100px' src={Logo} alt='logo' />
      <Stack spacing={2}>
        <Box sx={{p:0.75, borderRadius:'10px'}}>
          <Typography component='h1' variant='h6'><Link to='/admin/dashboard' sx={{color:'#000'}}>Dashboard</Link></Typography>
        </Box>
        <Box sx={{p:0.75, borderRadius:'10px'}}>
          <Typography component='h1' variant='h6'><Link to='/admin/dashboard/kelas' sx={{color:'#000'}}>Kelas</Link></Typography>
        </Box>
        <Box sx={{p:0.75, borderRadius:'10px'}}>
          <Typography component='h1' variant='h6'><Link to='/admin/dashboard/project' sx={{color:'#000'}}>Check Project</Link></Typography>
        </Box>
        <Box sx={{p:0.75, borderRadius:'10px'}}>
          <Typography component='h1' variant='h6'><Link to='/login' sx={{color:'#000'}}>Logout</Link></Typography>
        </Box>
      </Stack>
      
    </Box>
  )
}

export default AdminSidebar