import { Autocomplete, Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { useWindowSize } from '../Hooks/useWindowSize';
import ResponsiveBar from '../Components/ResponsiveBar';
import NotLogin from '../Components/NotLogin';
import { useLoginData } from '../Hooks/useLoginData';



const Project = ({allClass,setMataPelajaran,mataPelajaran}) => {
  document.title='Project'

  const isLogin = useLoginData()

  const {width} = useWindowSize()

  return (
    <Box sx={{backgroundColor:'#1f1f1f', height:'100vh'}}>
      {isLogin?(<Stack direction='horizontal'>
        {width>1200 && <Box sx={{width:'200px',position:'relative'}}>
          <Sidebar />
        </Box>}
        
        <Box sx={{paddingTop:10,paddingLeft:{
          xs:2,
          sm:5,
          md:10,
          lg:20
        },color:'#fff'}}>
          <ResponsiveBar />

          <Typography component='h6' variant='h5'>Subject:</Typography>
          <form >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={allClass}
            sx={{ width: 300 }}
            onChange={(e,newValue)=>setMataPelajaran(newValue)} 
            value={mataPelajaran}
            renderInput={(params) => <TextField sx={{color:'#fff',backgroundColor:'#fff'}} {...params}  />} />
            {mataPelajaran && <Box sx={{marginTop:5}}>
            <input type='file' required />
            <Button type='submit' variant='contained'>Submit</Button>
            </Box>}
          </form>
        </Box>
      </Stack>):<NotLogin />}
    </Box>
  )
}

export default Project