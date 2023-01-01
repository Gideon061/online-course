import { Autocomplete, Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AdminResponsiveBar from '../../Components/Admin/AdminResponsiveBar'
import { useWindowSize } from '../../Hooks/useWindowSize'

const AdminProject = ({allClass,setMataPelajaran,mataPelajaran}) => {
  document.title='Project(Admin)'

  const {width} = useWindowSize()

  return (
    <Box sx={{backgroundColor:'#1f1f1f', height:'100vh'}}>
      <Stack direction='horizontal'>
        {width>1200&& <Box sx={{width:'200px',position:'relative'}}>
          <AdminSidebar />
        </Box>}
        <Box sx={{paddingTop:10,paddingLeft:{
          xs:2,
          sm:5,
          md:10,
          lg:20},color:'#fff'}}>
            <AdminResponsiveBar />
          <Typography component='h6' variant='h5'>Pilih Mata pelajaran:</Typography>
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
              <Typography variant='h3' component='h2'>Belum ada Project yang dikumpulkan</Typography>
            </Box>}
          </form>
        </Box>
      </Stack>
    </Box>
  )
}

export default AdminProject