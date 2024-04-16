import React from 'react';
import { useState } from 'react';
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

    const [userData, setUserData] = useState({
        email: '',
        password: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevUserData => ({
          ...prevUserData,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
    
        alert(`Submitted Data:\nEmail: ${userData.email}\nPassword: ${userData.password}`);
        // You can reset the form fields here if needed
        setUserData({
          email: '',
          password: ''
        });
      };



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
      <Paper elevation={24} style={{ padding: 20, width: 300, height: 400,display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <h2 style={{ textAlign: 'center' }}>SignIn</h2>

   

    {/* <InputLabel htmlFor="email" style={{ marginTop: 20, marginLeft: 20 }}>Email:</InputLabel> */}
    <TextField id="password" type='email' name='email' label='Email' variant="outlined"  value={userData.email} onChange={handleChange}  style={{ marginLeft: 20, width: 'calc(100% - 40px)' }} />
    <TextField id="email" type='password' name='password' label='Password' variant="outlined"   value={userData.password} onChange={handleChange}   style={{ marginLeft: 20, width: 'calc(100% - 40px)' }} />

    {/* <InputLabel htmlFor="password" style={{ marginTop: 20, marginLeft: 20 }}>Password:</InputLabel> */}
    <br />

    <Button variant="contained" type='Submit'  onClick={handleSubmit} style={{ marginLeft: 20, marginTop: 20, width:'calc(100% - 40px)' }}>SignIn</Button>
  </Paper>
 
      </div>
      </ThemeProvider>

    </React.Fragment>

 );
 }