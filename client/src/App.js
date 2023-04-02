import {useEffect,useState} from 'react'
import axios from 'axios';
import Leetcode from './Components/LeetcodeDash/Leetcode';
import Navbar from './Components/NavBar/Navbar';
import './Components/Main.css'
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills'
import ContactMe from './Components/Contact/ContactMe'
import Coding from './Components/Coding/Coding';
import Projects from './Components/Project/Projects'
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";

import Blob1 from './Components/Images/Blob3.svg'

import Blob2 from './Components/Images/Blob4.svg'


const App = () => {
  return (    
    <BrowserRouter >     
    <img src={Blob1} alt='blob' className='blob1'/>
      <div className='outer_div'>
        
      <Navbar/>     
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<ContactMe/>}/>
        <Route path="/coding" element={<Coding/>}/>
      </Routes>
      </div> 
      <img src={Blob2} alt='blob' className='blob2'/>
    </BrowserRouter>

  )
}

export default App