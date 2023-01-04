import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material'
import React from 'react'

const Progress = ({choosenClass}) => {
  return (
    <Box className='progress' sx={{p:2, border:'2px solid #FFCC00',borderRadius:'10px'}}>
      <Stack spacing={1}>
        <Typography sx={{color:'primary.contrastText'}} variant='h6' component='div'>{choosenClass}</Typography>
        <LinearProgress variant='determinate' color='secondary' value='0' />
        <Typography sx={{color:'primary.contrastText'}} variant='caption' component='div'>0%</Typography>
        <Button sx={{width:{
          xs:'100%',
          sm:'100%',
          md:'50%',
          lg:'30%',
          xl:'30%'
        }}} color='secondary' variant='contained'>Continue</Button>
      </Stack>
    </Box>
  )
}

export default Progress