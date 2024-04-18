import React, { useState } from 'react'
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import { Avatar, Box, Button, Grid, Paper, Typography ,Link,TextField,Checkbox} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Snackbar from '@mui/material/Snackbar';
import { Field, Formik } from 'formik';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const closeHandler=()=>{
  if(reason==='clickaway'){
    return;
  }
  setOPen(false);
}

const initialValues={
  name :'',
  password:'',
  email :'',
}
const onSubmit=(values,props)=>{
  console.log(values);

}
export default function Signup() {
  const paperStyle={padding:20,height:'70vh', width:280,margin:"20px auto"}
  const avaterStyle={backgroundColor:'green'}
  const btnStyle={margin:'8px'}
const [open,setOPen]=useState(false);

const[action,setAction]= useState("Login");

// const [name,setName]=useState();
// const [password,setPassword]=useState();
// const [email,setEmail]=useState();

  return (
    <>
<Formik initialValues={initialValues} onSubmit={onSubmit}>
  {(props)=>(
    <form>
    <Grid>
        <Paper elevation={10} style={paperStyle}>
         <Grid align='center'>
         <Avatar style={avaterStyle}> <LockPersonOutlinedIcon/> </Avatar>
          <h2>Sign UP
          <hr/>
          </h2>
         </Grid>
  <  Field as ={TextField}  name="name"variant="standard" label='user name' fullWidth placeholder='enter user name' required />
   < Field as={TextField}  name="password"  variant="standard" label='Enter password' fullWidth placeholder='Enter a strong password' type='password' required  />
  < Field as={TextField}   name="email"variant="standard"  label='Email address' fullWidth  type='email' required placeholder="Ali@gmail.com" />
  
  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /> 
  <Button type='submit'color='primary' fullWidth variant="contained" style={btnStyle} onClick={()=>{setOPen(true)}}>{action}</Button>
  
  <Snackbar open={open} message="Form submitted successfuly" onClose={closeHandler} autoHideDuration={3000}/>
  
  <Typography>
    Do you have an account ?
    <a href='/login'> Login up</a> 
  </Typography>
  
        </Paper>
      </Grid>
      </form>

  )}
  

  


</Formik>
   
    
    </>
  )
}
