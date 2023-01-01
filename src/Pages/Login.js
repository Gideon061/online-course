import { Box, Button, Card, CardContent, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Login = () => {
  document.title='Login'

  const navigate = useNavigate()

  const loginData = JSON.parse(localStorage.getItem('userData'))
  const [form,setForm] = useState({
    email:'',
    password:'',
  })


  const changeHandler = (el) =>{
    const {name,value} = el.target;
    setForm({
      ...form,
      [name]:value
    })
  }

  const isAdmin = (email,password) =>{
    if(email ==='admin@online.com' && password ==='123456'){
      return navigate('/admin/dashboard')
    }
  }
  const validate = (e) =>{
    e.preventDefault()

    isAdmin(form.email,form.password)
    if(form.email === loginData.email && form.password === loginData.password){
      navigate('/dashboard')
    }
  }
  return (
    <Box sx={{
      display:'flex',
      backgroundColor:'primary.dark',
      alignItems:'center',
      width:'100vw',
      height:'100vh',
    }}>
      <Container sx={{width:'800px'}}>
        <Card sx={{p:6}}>
          <CardContent>
            <Typography variant='h4' component='div'>Login</Typography>
            <form onSubmit={validate}>
            <Box sx={{display:'flex', flexDirection:'column', gap:2, mt:4}}>
              <TextField onChange={changeHandler} name='email' type='email' id="outlined-basic" label="Email" variant="outlined" />
              <TextField onChange={changeHandler} name ='password' type='password' id="outlined-basic" label="Password" variant="outlined" />
              <Button type='submit' variant='contained'>Login</Button>
              </Box>
            </form>
            <Typography>Belum punya akun?<Link to='/register' className='link-redirect'>Buat Disini</Link></Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Login