import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ListClassAdmin from '../../Components/Admin/ListClassAdmin'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import { useWindowSize } from '../../Hooks/useWindowSize'
import AdminResponsiveBar from '../../Components/Admin/AdminResponsiveBar'

const AdminKelas = ({allClass}) => {
  document.title='Kelas (Admin)'

  const {width} = useWindowSize()

  return (
    <Box sx={{backgroundColor:'#1f1f1f'}}>
      <Stack direction='horizontal'>
        {width>1200 && <Box sx={{width:'200px',position:'relative'}}>
          <AdminSidebar />
        </Box>}
        <Box sx={{paddingTop:5,paddingLeft:{
          xs:2,
          sm:5,
          md:10,
          lg:10},width:'100%' ,color:'primary.contrastText'}}>
          <Typography component='h6' variant='h5'>List Kelas</Typography>
          <Box>
          <AdminResponsiveBar />

            {allClass.map((item)=>{
              return(
                <ListClassAdmin classes = {item} />
              )
            })}
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default AdminKelas