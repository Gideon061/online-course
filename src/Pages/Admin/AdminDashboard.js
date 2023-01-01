import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import TodoModal from '../../Components/Admin/TodoModal'
import { useWindowSize } from '../../Hooks/useWindowSize'
import AdminResponsiveBar from '../../Components/Admin/AdminResponsiveBar'

const AdminDashboard = ({populerClass}) => {
  document.title='Admin Dashboard'

  const data = [
    {
      "name": "Senin",
      "member_baru": 250,
    },
    {
      "name": "Selasa",
      "member_baru": 150,
    },
    {
      "name": "Rabu",
      "member_baru": 220,
    },
    {
      "name": "Kamis",
      "member_baru": 310,
    },
    {
      "name": "Jumat",
      "member_baru": 190,
    },
    {
      "name": "Sabtu",
      "member_baru": 220,
    },
    {
      "name": "Minggu",
      "member_baru": 300,
    }
  ]

  const [kerjaanTerlewat,setKerjaanTerlewat]= useState([
    'Memeriksa semua kerjaan yang sudah di kumpulkan',
    'Membuat Webinar untuk minggu depan'
  ])

  const [todo,setTodo] = useState('')
  const [todoData,setTodoData] = useState([])
  // console.log(todoData)
  // console.log(todo)
  const handleSubmit = (e) =>{
    e.preventDefault()
    setTodoData((prevTodo)=>{
      return[...prevTodo,todo]
    })
    setTodo('')
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {width} = useWindowSize()
  return (
    <Box sx={{background:'#1f1f1f'}}>
      <Stack direction='horizontal'>
        {width>1200 && <Box sx={{width:'250px',position:'relative'}} >
          <AdminSidebar />
        </Box>}
        <Box sx={{width:'100%',paddingTop:5,paddingLeft:{
          xs:2,
          sm:5,
          md:10,
          lg:20},color:'primary.contrastText' , 
        display:'flex',
        justifyContent:'center',
        marginBottom:5
      }}>
          <Box>
          <AdminResponsiveBar />

          <Typography variant='h4' component='div'>Halo Admin, Selamat Bekerja!</Typography>
          <Box>
            <Typography variant='h5' component='div' sx={{marginTop:5,marginBottom:5}}>Kenaikan Member seminggu ini</Typography>
            {/* Bar Chart */}
            <Box>
            <BarChart className='bar' width={730} height={350} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="member_baru" fill="#8884d8" />
            </BarChart>
            </Box>
          </Box>
          <Typography>Kelas Terpopuler</Typography>
          <Box sx={{p:2,border:'2px solid #ffcc00',marginTop:5,marginBottom:5}}>
            <Typography>Kelas dengan jumlah pendaftar terbanyak:</Typography>
            <Box>
              {populerClass.map((item,y)=>{
                return(
                  <Box key={y+202} sx={{border:'2px solid #ffe57f', p:2,marginTop:2}}>
                    <Stack direction='horizontal' justifyContent='space-between'>
                      <Typography>{item.judul}</Typography>
                      <Typography>Dengan kenaikan sebesar {item.anggota} anggota dalam 2 minggu</Typography>
                    </Stack>
                  </Box>
                )
              })}
            </Box>
            <Box sx={{width:'700px',display:'flex',alignItems:'center'}}>
          </Box>
        </Box>
        {width<1300&& <Box sx={{width:'700px',display:'flex',alignItems:'center'}}>
          <Box sx={{}}>
            <Typography variant='h5' component='h5' sx={{textAlign:'center'}}>Todo's List</Typography>
            <Box sx={{height:'700px',width:'400px',border:'1px solid #ffcc00', justifyItems:'center', backgroundColor:'#fff'}}>
              <Button onClick={handleOpen} variant='contained' sx={{width:'100%'}}>Create</Button>
              <TodoModal open={open} handleClose={handleClose} handleSubmit={handleSubmit} setTodo={setTodo} todo={todo} />
              {todoData.length<1? <Typography>Belum ada Todo</Typography> :todoData.map((todos,i)=>{
                return(
                  <Typography variant='body1' component='p'>{i+1}. {todos}</Typography>
                )
              })}
            </Box>
          </Box>
        </Box>}
          <Box>
            <Typography>Pekerjaan yang belum terselesaikan:</Typography>
            <Box sx={{background:'red',border:'1px solid #ffcc00'}}>
              {kerjaanTerlewat.map((kerjaan)=>{
                return(
                  <Box>
                    <Typography sx={{borderBottom:'1px solid #fff',textAlign:'center'}}>{kerjaan}</Typography>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
        </Box>
        {width>1300&& <Box sx={{width:'700px',display:'flex',alignItems:'center'}}>
          <Box sx={{}}>
            <Typography variant='h5' component='h5' sx={{textAlign:'center',color:'primary.contrastText',marginBottom:2}}>Todo's List</Typography>
            <Box sx={{height:'700px',width:'400px',border:'1px solid #ffcc00', justifyItems:'center', backgroundColor:'#fff'}}>
              <Button onClick={handleOpen} variant='contained' sx={{width:'100%'}}>Create</Button>
              <TodoModal open={open} handleClose={handleClose} handleSubmit={handleSubmit} setTodo={setTodo} todo={todo} />
              {todoData.length<1? <Typography>Belum ada Todo</Typography> :todoData.map((todos,i)=>{
                return(
                  <Typography variant='body1' component='p'>{i+1}. {todos}</Typography>
                )
              })}
            </Box>
          </Box>
        </Box>}
      </Stack>
    </Box>
  )
}

export default AdminDashboard