import React from 'react'
import { AppBar, Button, Paper, Stack, Toolbar, Typography ,Box} from '@mui/material'
import { Link } from 'react-router-dom'


export default function Card() {
  const  paperStyle={width:'350px',height:'auto', padding:'25px',margin:'50px 2px 2px 2px', borderRadius:10,}
  const fiterItem=(lunch)=>{

  }

  return (
    <>
    <AppBar>
  <Toolbar>
  <Typography variant='h6' component={'dev'} sx={{marginRight:'800px', flexGrow:'1'}}>My Resturent</Typography>
    
    <Stack  direction={'row'} spacing={2}>
      <Button color='inherit' component={Link} to="/resturent" onClick={()=>fiterItem("lunch")
    }>Lunch</Button>
      <Button color='inherit' component={Link} to="/resturent">Breakfast</Button>
      <Button color='inherit' component={Link} to="/resturent">Evening</Button>
      <Button color='inherit' component={Link} to="/resturent">All</Button>

    </Stack>
  </Toolbar>
</AppBar>

<Box>
<Paper elevation={10} style={paperStyle}>
<div>
  <h1>pizza</h1>
  <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum culpa magni laudantium a
     cupiditate corrupti vitae consequuntur! Maiores
     exercitationem adipisci accusantium numquam error ad, ratione quia deleniti consequuntur, quae ipsa? </p>
     <img src='\src\assets\pak.jpeg' style={{width:'250px',height:'200px',borderRadius:'50%'}}/>
</div>

</Paper>
</Box>
</>

  )
}
