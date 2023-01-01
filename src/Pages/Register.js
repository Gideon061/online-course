import React, { useState } from 'react'
import {Box, Button, Card, CardContent, Container, TextField, Typography} from '@mui/material'
import { useApi } from '../Hooks/useAPI'
import Quote from '../Assets/icons8-quote-left-96.png'
import { useWindowSize } from '../Hooks/useWindowSize'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


const Register = () => {
  document.title='Register'
  const {width} = useWindowSize()
  const {data,isLoaded} = useApi()
  const navigate = useNavigate()

  const [form,setForm] = useState({
    nama:'',
    email:'',
    konfirmasi_email:'',
    password:'',
    konfirmasi_password:''
  })

  const [error,setError] = useState(false);
  const [isEmailValid,setIsEmailValid] = useState(true)
  const [isPasswordValid,setIsPasswordValid] = useState(true)
  const [errorMessage,setErrorMessage] = useState([])


  const changeHandler = (el) =>{
    const {name,value} = el.target;
    setForm({
      ...form,
      [name]:value
    })
  }

  const confirmation_checker = (type,check1,check2) =>{
    if(type === "email"){
      if(check1 !== check2){
        setError(true)
        setIsEmailValid(false)
        setErrorMessage(prevMessage=>{
          return [...prevMessage,'Email tidak sama']
        })
      }
    }

    if(type === "password"){
      if(check1 !== check2){
        setError(true)
        setIsPasswordValid(false)
        setErrorMessage(prevMessage=>{
          return[...prevMessage,'Password tidak sama']
        })
      }
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setErrorMessage([])
    // Check Apakah email sesuai
    confirmation_checker("email",form.email,form.konfirmasi_email)
    // Check apakah password sesuai
    confirmation_checker("password",form.password,form.konfirmasi_password)

    if(isEmailValid && isPasswordValid){
      localStorage.setItem('userData',JSON.stringify(form))
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
    }} >
    <Container>
      {isLoaded && (
      <Card sx={{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        alignSelf:'center',
        paddingLeft:{
          xs:0,
          sm:1,
          md:2,
          lg:3,
          xl:5
        }
      }}>
        <CardContent sx={{width:'100%'}}>
          <Typography variant='h5' component='div'>Bergabung dan tingkatkan kemampuan mu untuk meraih karir impian mu.</Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{display:'flex', flexDirection:'column', gap:2, mt:4}}>
              <TextField required type='text' onChange={changeHandler} id="outlined-basic" name='nama' label="Nama" variant="outlined" />
              <TextField required type='email' onChange={changeHandler} color={isEmailValid?'primary':'error'} id="outlined-basic" name= 'email' label="Email" variant="outlined" />
              <TextField required type='email' onChange={changeHandler} color={isEmailValid?'primary':'error'} id="outlined-basic" name='konfirmasi_email' label="Konfirmasi Email" variant="outlined" />
              <TextField required type='password' onChange={changeHandler} id="outlined-basic" color={isPasswordValid?'primary':'error'} name='password' label="Password" variant="outlined" />
              <TextField required type='password' onChange={changeHandler} id="outlined-basic" color={isPasswordValid?'primary':'error'} name='konfirmasi_password' label="Konfirmasi Password" variant="outlined" />
              <Button type='submit' color='primary' variant='contained'>Sign Up</Button>
              {width<1200 && <Typography variant='caption' component='div'>Already Have account? <Link href='/login'>Login</Link> here</Typography>}
            </Box>
          </form>

          {errorMessage.length>0 && errorMessage.map((item)=>{
        return(
          <Typography component='div' variant='body1' color='error'>{item}</Typography>
        )
      })}
        </CardContent>
        {width>1200&&<Box sx={{
          backgroundColor: 'primary.light',
          // border:'1px solid red',
          width:'1202px',
          height:'616.547px',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          position:'relative',
          p:4
        }}>
          <Box>
          <img src={Quote} alt="Quote Tag" className='register-img-handler' />
        {data.map((item)=>{
          return(
            <Typography variant='body1' component='div' >{item.quote}</Typography>
          )
        })}
        </Box>
        <Typography variant='h6' component='div' sx={{
          position:'absolute',
          bottom:'0'
        }} >Already Have account? <Link to='/login'>Login</Link> here</Typography>
        </Box>}
        
      </Card>)}

    </Container>
    </Box>
  )
}

export default Register