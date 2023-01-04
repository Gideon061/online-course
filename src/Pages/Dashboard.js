import { Box, Stack, Typography,Card, CardContent, Button } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Progress from '../Components/Progress'
import Slider from "react-slick";
import KelasPopuler from '../Components/KelasPopuler';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowSize } from '../Hooks/useWindowSize';
import ResponsiveBar from '../Components/ResponsiveBar';
import { useLoginData } from '../Hooks/useLoginData';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';



const Dashboard = ({populerClass,choosenClass}) => {
  document.title='Dashboard'

  const navigate = useNavigate()
  const isLogin = useLoginData()
  const {width} = useWindowSize()

  const handleLogin =()=>{
    navigate('/register')
  }


  const settings = {
    infinite: false,
    dots:false,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box sx={{backgroundColor:'#1f1f1f',width:'100vw'}}>
      {isLogin?(<Stack direction='horizontal' spacing={2}>
        {width>1200&&<Box sx={{width:'200px',position:'relative'}}>
        <Sidebar />
        </Box>}
        <Box sx={{width:'100%',paddingTop:10,paddingLeft:{
          xs:2,
          sm:5,
          md:10,
          lg:20
        } }}>
          <ResponsiveBar />
          <Typography sx={{marginBottom:4,color:'primary.contrastText'}} component='h6' variant='h4'>Hello {isLogin.nama} , Welcome! </Typography>
          <Card sx={{paddingTop:3,paddingBottom:4}}>
            <CardContent >
              <Typography component='h5' variant='h5'>Improve your ability to achieve your dream career.</Typography>
              <Typography component='p' variant='subtitle1'>Master digital skills and build your portfolio from home.</Typography>
            </CardContent>
          </Card>
          {width<1100&&<Box sx={{backgroundColor:'primary.main', width:'100%',marginTop:5,p:2,borderRadius:'10px'}}>
            <Typography variant='h6' component='div'>Have a voucher code?</Typography>
            <Button variant='contained'>Redeem Here!</Button>
          </Box>}
          <Typography sx={{marginTop:2,marginBottom:2,color:'primary.contrastText'}} component='h6' variant='h5'>Class Progress</Typography>
          <Box>
            <Stack spacing={2}>
              {choosenClass.length>1 ? choosenClass.map((item,y)=>{
                return(
                  <Progress key={200+y} choosenClass={item} />
                )
              }):(<Box sx={{border:'1px solid #FFCC00', p:3 , display:'flex',justifyContent:'center' ,flexDirection:'column', gap:4}}>
                <Typography component='h5' variant='h5' sx={{color:'#fff',textAlign:'center'}}>Currently no class Here!</Typography>
                <Button variant='contained'><Link to='/dashboard/kelas'>Add now</Link></Button>
                </Box>)}
            </Stack>
          </Box>
          <Typography variant='h5' component='div' sx={{marginTop:4, marginBottom:4, color:'primary.contrastText'}}>Kelas Terpopuler</Typography>
            <Slider {...settings}>
              {populerClass.map((c,i)=>{
                return(
                  <KelasPopuler key={100+i} c={c} />
                )
              })}
              </Slider>
        </Box>
        {width>1200 && <Box sx={{width:'800px',paddingTop:19}}>
          <Box sx={{backgroundColor:'primary.main', width:'250px',p:2,borderRadius:'10px' ,marginLeft:'20px'}}>
            <Typography variant='h6' component='div'>Have Voucher Code?</Typography>
            <Button variant='contained'>Redeem here</Button>
          </Box>
        </Box>}
      </Stack>):(
      <Box sx={{height:'100vh'}}>
        <Button variant='contained' onClick={handleLogin}>Login</Button>
      </Box>
      )}
    </Box>
  )
}

export default Dashboard