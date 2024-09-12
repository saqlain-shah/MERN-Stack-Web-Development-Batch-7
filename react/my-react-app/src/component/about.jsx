import { Button, FormControl, InputLabel, Select, TextField, Typography,MenuItem } from '@mui/material'
import { Form } from 'formik'
import React, { Fragment, useState } from 'react'

export default function about() {

const [inputs,setinputes]=useState({
  name:'ali',
  fname:'',
  gmail:'',
  courses:'',
})

const handelchange= (e)=>{
  setinputes(prevState=>({...prevState,
    [e.target.name]:[e.target.value],

  }))


}
const handlesubmit=(e)=>{
  e.preventDefault();
  console.log(inputs)

}
  return (
<Fragment>
  <Typography variant='h1'>
    About material UI
  </Typography>
  <Typography variant='h2'>About UI Material Button's</Typography>
  <Button variant='contained' color='success' sx={{margin:"30px"}}>click me </Button>
  <Button variant='text' disabled>Disabled</Button>
  <Button variant='outlined' onClick={
    ()=>{alert("You clicked me") }
  } size='large'> click me</Button>

  <Typography variant='h3'> Text Field</Typography>
  <form onSubmit={handlesubmit}>

<TextField name='name' sx={{margin:'30px'}} placeholder='Enter your name' variant="standard" type='text' onChange={handelchange} value={inputs.name}></TextField><br/>
<TextField name='fname' placeholder='Enter your Father name ' variant="outlined" type='text' onChange={handelchange} value ={inputs.fname}></TextField><br/>
<TextField name='gmail' placeholder='Enter your gmail ' type="email" variant="filled" onChange={handelchange} value={inputs.gmail} ></TextField>
<br/>
<Button type='submit'>submit</Button>

<FormControl fullWidth>
<InputLabel ld='menue'>Courses</InputLabel>
<Select label='courses' value={inputs.courses} onChange={handelchange} name='courses'>
  <MenuItem value='mongoDB'>mongoDB</MenuItem>
  <MenuItem value='react'>react</MenuItem>
  <MenuItem value='express'>express</MenuItem>
  <MenuItem value='js'>js</MenuItem>
   </Select>

</FormControl>

  </form>

</Fragment>
)


}
