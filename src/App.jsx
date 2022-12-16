import { useState } from 'react'
import reactLogo from './assets/react.svg'
// Default theme. ~960B
import '@vime/core/themes/default.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from '@mui/material/Button';
// Material Kit 2 React Components
import Home from './Home';
import Watch from './watch';
import Search from './Search';
import Info from "./Info"
import Sign from '../Sign';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter className="bg-slate-600" style={{
      backgrondColor:"black"
    }}>
      <Routes>
        
        <Route path="/" element={<Home />}/>
         <Route path="/watch/:id" element={<Watch/>}/>
         <Route path="/info/:id" element={<Info/>}/> 
         <Route path="/search" element={<Search/>}/> 
         <Route path="/Sign" element={<Sign/>}/> 
        
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
