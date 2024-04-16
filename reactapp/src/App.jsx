// App.jsx
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
// import UserDataForm from './components/firstComponent.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import Table from './components/table.jsx';
import ResponsiveAppBar from './components/AppBar.jsx';
import LandingPage from './components/LanndingPage.jsx';


const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage/>}/>
        <Route  path='/login' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/Home' element={<ResponsiveAppBar/>}/>
      </Routes>
      </BrowserRouter>
            

   
  );
};

export default App;
