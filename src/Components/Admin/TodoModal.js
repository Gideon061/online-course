import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const TodoModal = ({open,handleClose,setTodo,todo,handleSubmit}) => {

  const handleChange = (el) =>{
    return setTodo(el.target.value)
  }
  return (
    <Box>
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
      xs:200,
      sm:300,
      md:400,
      lg:500,
      xl:600
    },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,}}>
    <Typography>Create Todo</Typography>
    <form onSubmit={handleSubmit}>
      <Stack>
      <TextField name='todo' onChange={handleChange} value={todo} sx={{backgroundColor:'#fff',marginBottom:5}} id="outlined-basic" label="Todo" variant="outlined" />
      <Button type='submit' variant='outlined'>Buat sekarang!</Button>
      </Stack>
    </form>
      </Box>
    </Modal>
  </Box>
  )
}

export default TodoModal