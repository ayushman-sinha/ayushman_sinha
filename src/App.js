import {useEffect,useState} from 'react'
import axios from 'axios';
import Leetcode from './Components/LeetcodeDash/Leetcode';
import Navbar from './Components/NavBar/Navbar';
import './Components/Main.css'
import AboutMe from './Components/AboutMe/AboutMe';
import { useCallback } from "react";


const App = () => {

  
  return (
    
      <>
  
        <Navbar/>
               
        <AboutMe/>
      </>
    
  )
}

export default App