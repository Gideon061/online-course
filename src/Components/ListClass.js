import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const ListClass = ({classes,addClass,isOpen}) => {

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
      <Button onClick={()=> addClass(classes.label)} variant='outlined' sx={{width:{
        xs:'100%',
        sm:'100%',
        md:'50%',
        lg:'30%',
        xl:'25%'
        }}}>Add to my Class</Button>
      </Stack>
    </Box>
  )
}

export default ListClass