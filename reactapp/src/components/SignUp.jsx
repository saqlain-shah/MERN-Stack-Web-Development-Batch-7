  import React from 'react';
  import { useState } from 'react';

  import Paper from '@mui/material/Paper';
  import  TextField from '@mui/material/TextField';
  import InputLabel from '@mui/material/InputLabel';
  import Button from '@mui/material/Button';
  import Snackbar from '@mui/material/Snackbar';


  export default function SignUp() {
      const [userData, setUserData] = useState({
        name: '',
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
    
        alert(`Submitted Data:\nName: ${userData.name}\nEmail: ${userData.email}\nPassword: ${userData.password}`);
        // You can reset the form fields here if needed
        setUserData({
          name: null,
          email: '',
          password: ''
        });
      };

// snackBar
      const [open, setOpen] = React.useState(false);

      const handleClick = () => {
        setOpen(true);
      };



    return (
      <React.Fragment>
        <div style={{
        marginTop:40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        
        }}
        >
        <Paper elevation={3} style={{ padding: 20, width: 300, height: 450 ,display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
      <h2 style={{ textAlign: 'center' }}>SignUp</h2>

      {/* <InputLabel htmlFor="name" style={{ marginTop: 20, marginLeft: 20 }}>Name:</InputLabel> */}
      <TextField id="name" variant="outlined" name='name' label='Name' value={userData.name} onChange={handleChange} style={{ marginLeft: 20, width: 'calc(100% - 40px)' }} required />

      {/* <InputLabel htmlFor="email" style={{ marginTop: 20, marginLeft: 20 }}>Email:</InputLabel> */}
      <TextField id="email" type='email' name='email' label='Email' variant="outlined" value={userData.email} onChange={handleChange} style={{ marginLeft: 20, width: 'calc(100% - 40px)' }} />

      {/* <InputLabel htmlFor="password" style={{ marginTop: 20, marginLeft: 20 }}>Password:</InputLabel> */}
      <TextField id="password" type='password' name='password' label='Password' variant="outlined" value={userData.password} onChange={handleChange} style={{ marginLeft: 20, width: 'calc(100% - 40px)' }} />
      <br />

      <Button variant="contained" type='Submit' onSubmit={handleSubmit} onClick ={handleClick} style={{ marginLeft: 20, marginTop: 20, width:'calc(100% - 40px)' }}>Register</Button>


      <Snackbar
        open={open}
        autoHideDuration={2000}
        message="Success"
     
      />
    </Paper>
        </div>

      </React.Fragment>


    
    );
  }
