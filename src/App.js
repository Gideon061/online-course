import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Dashboard from './Pages/Dashboard';
import Kelas from './Pages/Kelas';
import { useState } from 'react';
import Project from './Pages/Project';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminKelas from './Pages/Admin/AdminKelas';
import AdminProject from './Pages/Admin/AdminProject';

function App() {


  const [choosenClass,setChoosenClass] = useState([])


  const [populerClass,setPopulerClass] = useState([
    {
    judul:'Programming Dasar',
    module:'12 Video & 3 Zoom(Webinar)',
    harga:'Rp. 750,000',
    anggota:875
  },{
    judul:'Pemrograman Web',
    module:'10 Video & 3 Zoom(Webinar)',
    harga:'Rp. 700,000',
    anggota:847
  },
  {
    judul:'Pemrograman Android',
    module: '11 Video & 4 Zoom (Webinar)',
    harga:'Rp. 750,000',
    anggota:763
  },{
    judul:'Bahasa Inggris',
    module:'8 video & 2 Zoom (Webinar)',
    harga:'Rp. 550,000',
    anggota:658
  },
  {
    judul:'Digital Marketing',
    module:'11 Video & 4 Zoom(Webinar)',
    harga:'Rp. 600,000',
    anggota:653

  },
  {
    judul:'Personal Branding',
    module:'11 Video & 3 Zoom(Webinar)',
    harga:'Rp. 570,000',
    anggota:599
  }
  ])

  const [mataPelajaran,setMataPelajaran] = useState('')

  const theme = createTheme({
    palette: {
      primary: {
        light: '#Ffe57f',
        main:'#FFCC00',
        dark: '#e5b700',
        contrastText: '#fff',
      },
      secondary:{
        main:'#e5b700'
      },
      third:{
        main:"#Ffe57f"
      }
    },
  });

  const [allClass,setAllClass] = useState([
    {
      label:'Basic Programming',
      module:'12 Video & 3 Zoom(Webinar)',
      harga:'Rp. 750,000'
    },{
      label:'Web Programming',
      module:'10 Video & 3 Zoom(Webinar)',
      harga:'Rp. 700,000'
    },
    {
      label:'Android Programming',
      module: '11 Video & 4 Zoom (Webinar)',
      harga:'Rp. 750,000'
    },{
      label:'English',
      module:'8 video & 2 Zoom (Webinar)',
      harga:'Rp. 550,000'
    },
    {
      label:'Digital Marketing',
      module:'11 Video & 4 Zoom(Webinar)',
      harga:'Rp. 600,000'
  
    },
    {
      label:'Personal Branding',
      module:'11 Video & 3 Zoom(Webinar)',
      harga:'Rp. 570,000'
    },
    {
      label:'Content Creator',
      module:'10 Video & 3 Zoom(Webinar)',
      harga:'Rp. 600,000'
    },
    {
      label:'Video Editing',
      module:'11 Video & 4 Zoom(Webinar)',
      harga:'Rp. 620,000'
    },
    {
      label:'Content Marketing',
      module:'10 Video & 1 Zoom(Webinar)',
      harga:'Rp. 600,000'
    },
    {
      label:'Programming Android(Flutter)',
      module:'14 Video & 3 Zoom(Webinar)',
      harga:'Rp. 780,000'
    },
    {
      label:'Programming iOS(Swift)',
      module:'10 Video & 3 Zoom(Webinar)',
      harga:'Rp. 680,000'
    },
    {
      label:'Programming Python',
      module:'7 Video & 2 Zoom(Webinar)',
      harga:'Rp. 580,000'
    },
    {
      label:'Algorithm & Data Structure',
      module:'11 Video & 4 Zoom(Webinar)',
      harga:'Rp. 580,000'
    },

  ])

  return (
    <Box >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Routes>
          <Route
          path="*"
          element={<Register to="/register" replace />}
      />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard choosenClass={choosenClass} populerClass={populerClass} />} />
          <Route path='/admin/dashboard' element={<AdminDashboard populerClass={populerClass} />} />
          <Route path='/admin/dashboard/kelas' element={<AdminKelas allClass={allClass} />} />
          <Route path='/admin/dashboard/project' element={<AdminProject allClass={allClass} mataPelajaran={mataPelajaran} setMataPelajaran={setMataPelajaran} />} />
          <Route path='/dashboard/kelas' element={<Kelas choosenClass={choosenClass} setChoosenClass={setChoosenClass} allClass ={allClass} />} />
          <Route 
          path='/dashboard/project' 
          element={
          <Project 
          allClass ={allClass}
          mataPelajaran={mataPelajaran} 
          setMataPelajaran={setMataPelajaran} 
          />} 
          />
        </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
