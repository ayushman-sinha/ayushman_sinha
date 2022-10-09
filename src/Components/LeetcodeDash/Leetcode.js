import {useState,useEffect} from 'react'
import axios from 'axios';
import './Leetcode.css'

const Leetcode = () => {
    const[profile,setProfile]=useState([]);
    useEffect(()=>{
      const getProfile=async()=>{
        const response=await axios.get('http://localhost:3500/api/routes/leetcode').then((response)=>{
          setProfile(response.data);
          console.log(response.data);     
        });
        
        
      }
      getProfile();
    },[]);
  return (
    <div>{JSON.stringify(profile)}</div>
  )
}

export default Leetcode