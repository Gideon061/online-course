import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const ListClass = ({classes}) => {
  return (
    <Box sx={{margin:{
      xs:1,
      sm:1,
      md:2,
      lg:3}}}>
      <Stack direction={{xs:'column',md:'row',lg:'row'}} sx={{width:'100%',p:5,border:'1px solid #FFCC00'}} justifyContent='space-around' alignContent='center'>
      <Typography>{classes.label}</Typography>
      <Typography>{classes.module}</Typography>
      <Typography>{classes.harga}</Typography>
      <Button variant='outlined' sx={{width:'25%'}}>Beli</Button>
      </Stack>
    </Box>
  )
}

export default ListClass