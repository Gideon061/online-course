import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const NotLogin = () => {
  const navigate = useNavigate()

  const handleLogin =()=>{
    navigate('/register')
  }
  return (
    <div>
      <Box sx={{height:'100vh'}}>
        <Button variant='contained' onClick={handleLogin}>Login</Button>
      </Box>
    </div>
  )
}

export default NotLogin