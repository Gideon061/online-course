import { Box, Button, Slider, Typography } from '@mui/material';


const KelasPopuler = ({c}) => {


  return (
    <Box sx={{border:'2px solid #e5b700' ,width:'300px',p:5, textAlign:'center',marginBottom:5, color:'primary.contrastText'}}>
      <Typography sx={{marginTop:1}} variant='h6' component='h6'>{c.judul}</Typography>
      <Typography sx={{marginTop:14}} variant='h6' component='h6'>{c.module}</Typography>
      <Typography sx={{marginTop:5}} variant='h6' component='h6'>{c.harga}</Typography>
      <Button variant='outlined' >Detail Kelas</Button>
      
    </Box>
  )
}

export default KelasPopuler