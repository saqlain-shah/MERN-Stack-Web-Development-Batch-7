// import { useState } from 'react';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import { Avatar, Box, Button, Grid, Paper, Typography, Link, TextField, Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Snackbar from '@mui/material/Snackbar';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// const closeHandler=()=>{
//   if(reason==='clickaway'){
//     return;
//   }
//   setOPen(false);
// }

const initialValues = {
  name: "",
  password: "",
};

function Registration() {

  const { values, handleBlur, handleChange, handleReset, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
  const avaterStyle = { backgroundColor: 'green' };
  const btnStyle = { margin: '8px' };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avaterStyle}><LockPersonOutlinedIcon /></Avatar>
              <h2>Login</h2>
              <hr fullWidth />
            </Grid>
            <TextField variant="standard" label='user name' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} fullWidth placeholder='enter user name' required />
            {errors.name && touched.name ? <p className='from-error'>{errors.name}</p> : null}
            <TextField variant="standard" label='user password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} fullWidth placeholder='enter user password' type='password' required />
            {errors.password && touched.password ? <p className="from-error">{errors.password}</p> : null}
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            <Button type='submit' color='primary' fullWidth variant="contained" style={btnStyle}   >login</Button>
            {/* <Snackbar open={open} message="Form submitted successfuly" onClose={closeHandler} autoHideDuration={1000}/> */}

            <Typography>
              <Link href="#">Forget Password</Link>
            </Typography>
            <Typography>
              Create a new account
              <a href='/signup'> sign up</a>  
            </Typography>
          </Paper>
        </Grid>
      </form>
    </>
  )
}
export default Registration;
