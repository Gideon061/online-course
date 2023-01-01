import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import ListClass from '../Components/ListClass'
import { useWindowSize } from '../Hooks/useWindowSize'
import ResponsiveBar from '../Components/ResponsiveBar';
import { useLoginData } from '../Hooks/useLoginData'
import { useNavigate } from 'react-router'
import NotLogin from '../Components/NotLogin'


const Kelas = ({allClass}) => {
  document.title='Kelas'

  const isLogin = useLoginData()
  const {width} = useWindowSize()

  return (
    <Box sx={{backgroundColor:'#1f1f1f'}}>
      {isLogin ? (
        <Box>
      <ResponsiveBar />
      <Stack direction='horizontal'>
        {width>1200 &&<Box sx={{width:'200px',position:'relative'}}>
          <Sidebar />
        </Box>}
        <Box sx={{paddingTop:5,paddingLeft:{
          xs:2,
          sm:3,
          md:5,
          lg:20
        },width:'100%' ,color:'primary.contrastText'}}>
          <Typography component='h6' variant='h5'>List Kelas</Typography>
          <Box>
            {allClass.map((item,i)=>{
              return(
                <ListClass key={i+45} classes = {item} />
              )
            })}
          </Box>
        </Box>
      </Stack> 
      </Box>):<NotLogin />}
    </Box>
  )
}

export default Kelas