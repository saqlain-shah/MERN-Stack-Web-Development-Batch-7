
import './App.css'
import Registration from './component/registration'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Signup from './component/signup'
import Navbar from './component/navbar'
import About from './component/about';
import Contact from './component/contact';
import Home from './component/home';
import { Resturent } from './resturent/resturent';
import Multistepform from './multistepForm/multistepform';
function App() {


  //   const student ={
  //     name :'ali',
  //     rollno:12,
  //   }
  return (
    <>


      <Routes>
        <Route path='/*' element={<Navbar />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='/login' Component={Registration} />
        <Route path='/signup' Component={Signup} />
        <Route path='/resturent/resturent' Component={Resturent}/>
        <Route path='/multistepform' Component={Multistepform}/>





      </Routes>







    </>
  )
}

export default App;
