import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material'
import React from 'react'

const Progress = ({classList}) => {
  return (
    <Box className='progress' sx={{p:2, border:'2px solid #FFCC00',borderRadius:'10px'}}>
      <Stack spacing={1}>
        <Typography sx={{color:'primary.contrastText'}} variant='h6' component='div'>{classList.judul}</Typography>
        <LinearProgress variant='determinate' color='secondary' value={classList.progress} />
        <Typography sx={{color:'primary.contrastText'}} variant='caption' component='div'>{classList.progress}%</Typography>
        <Button sx={{width:'35%'}} color='secondary' variant='contained'>Lanjut Kelas</Button>
      </Stack>
    </Box>
  )
}

export default Progress