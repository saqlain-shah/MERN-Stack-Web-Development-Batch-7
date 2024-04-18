import React from 'react'
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <AppBar>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1, marginRight: '750px' }}> <img src='\src\assets\pak.jpeg' style={{width:'50px',height:'50px',borderRadius:'50%'}}></img> </Typography>
          <Stack direction={'row'} spacing={2}>

            <Button color='inherit' component={Link} to="/home" >Home</Button>
            <Button color='inherit' component={Link} to="/about">About</Button>
            <Button color='inherit' component={Link} to="/contact" >Contact</Button>
            <Button color='inherit' component={Link} to="/login">Login</Button>
            <Button color='inherit' component={Link} to="/signup" >Sign Up</Button>
            <Button color='inherit' component={Link} to="/multistepform" >MultistepForm</Button>




          </Stack>

        </Toolbar>
      </AppBar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>

  )
}
