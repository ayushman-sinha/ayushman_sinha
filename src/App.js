import {useEffect,useState} from 'react'
import axios from 'axios';
import Leetcode from './Components/LeetcodeDash/Leetcode';
import Navbar from './Components/NavBar/Navbar';
import './Components/Main.css'
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills'
import ContactMe from './Components/Contact/ContactMe'
import Projects from './Components/Project/Projects'
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";




const App = () => {

  
  return (    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<ContactMe/>}/>
        <Route path="/coding" element={<Leetcode/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App