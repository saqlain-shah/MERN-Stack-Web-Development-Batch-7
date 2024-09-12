import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

import FirstComponent from './component/FirstComponent.jsx'
import SecondComponent from './component/SecondComponent.jsx'
// import PropsState from './component/PropsState.jsx'
import Task from './component/task.jsx'
import Counter from './component/counter.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstComponent/> */}
    {/* <PropsState name="ali" address="skardu"/> */}
    {/* <SecondComponent/> */}

    {/* <h1>Our form</h1> */}
    {/* <Task/> */}
    {/* <h1>Our Counter</h1> */}
    {/* <Counter/> */}
    <BrowserRouter>
    <App />

    </BrowserRouter>
  
    
  

  </React.StrictMode>,
)
