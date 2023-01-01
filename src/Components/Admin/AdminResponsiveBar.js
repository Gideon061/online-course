import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useWindowSize } from '../../Hooks/useWindowSize';
import Logo from '../../Assets/Logo.png'


export default function SwipeableTemporaryDrawer() {
  const {width} = useWindowSize()

  const [anchorEl, setAnchorEl] = React.useState(false);

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