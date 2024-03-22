import * as React from 'react';
  
import Paper from '@mui/material/Paper';
import  TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';




// Define a dark theme
const darkTheme = createTheme({
    palette: {
      mode: 'dark', // Enable dark mode
    },
  });

export default function SignIn() {
  return (

    

    <React.Fragment>

<ThemeProvider theme={darkTheme}>
      <div style={{
      marginTop:40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      
      }}
      >
      <Paper elevation={24} style={{ padding: 20, width: 300, height: 400 }}>
    <h2 style={{ textAlign: 'center' }}>SignIn</h2>

   

    <InputLabel htmlFor="email" style={{ marginTop: 20, marginLeft: 20 }}>Email:</InputLabel>
    <TextField id="email" type='email' variant="outlined" style={{ marginLeft: 20, width: 'calc(100% - 40px)' }} />

    <InputLabel htmlFor="password" style={{ marginTop: 20, marginLeft: 20 }}>Password:</InputLabel>
    <TextField id="password" type='password' variant="outlined" style={{ marginLeft: 20, width: 'calc(100% - 40px)' }} />
    <br />

    <Button variant="contained" type='Submit' style={{ marginLeft: 20, marginTop: 20, width:'calc(100% - 40px)' }}>SignIn</Button>
  </Paper>
 
      </div>
      </ThemeProvider>

    </React.Fragment>

 );
 }