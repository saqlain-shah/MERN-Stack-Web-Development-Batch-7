// App.jsx
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
// import UserDataForm from './components/firstComponent.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';


const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route  path='/login' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
            

   
  );
};

export default App;
