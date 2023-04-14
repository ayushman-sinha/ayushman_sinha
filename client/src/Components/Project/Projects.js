import {useState,useEffect} from 'react'
import './Project.css'

import pic1 from './Assets/pic11.png'
import pic2 from './Assets/pic2.png'
import pic3 from './Assets/pic3.png'
import pic4 from './Assets/pic4.png'
import p1 from './Assets/p1.mp4'


const Projects = () => {
    
    
  return (
    <div className='main_container_project'>
    
      <div className='main_container_project_inner'>
      <div className='large_text_project'>
            Projects
       </div>
        <div className='project_container' >
            <div className='project_container_inner' >
                <img src={pic1} alt='pic1' className='inner_img '/>
               
            </div>
            <div className='project_container_description'>
                <h1 ><a href='https://github.com/ayushman-sinha/bloggapp' target='_blank'>Blog Application</a></h1>
                <p>Blog Application is a full stack application that allows users to create, edit, and delete blog posts. Users can also comment on other users' posts. This application was built using React, Node.js, Express, and MongoDB.</p>
            </div>
        </div>
        <div className='project_container'>
          
            <div className='project_container_inner '>
                <img src={pic2} alt='pic2' className='inner_img'/>
            </div>
            <div className='project_container_description pic2_heading '>
                <h1 className=' under_development'>Leetcode Rating Predictor</h1>
                <p>A web app to fetch user details and ratings from Leetcode and used Elo rating algorithm to determine their ratings.
                Used c++ addon module and multithreading to speed up the prediction process.
                </p>
            </div>
        </div>
        <div className='project_container'>
            <div className='project_container_inner'>
                <img src={pic3} alt='pic3' className='inner_img'/>
            </div>
            <div className='project_container_description'>
                <h1><a href='https://todolist-one-gold.vercel.app/' target='_blank'> To-Do Application </a></h1>
                <p>A simple to-do application built using React and Redux. Users can add, edit, and delete to-do items.
                 This application uses local storage to store the to-do items and is fully responsive.</p>
            </div>
        </div>
        <div className='project_container'>
            <div className='project_container_inner'>
                <img src={pic4} alt='pic4' className='inner_img'/>
            </div>
            <div className='project_container_description pic2_heading h1'>
                <h1><a  href='https://ayushman-sinha.github.io/gantt_visualizer/' target='_blank'>Gantt Chart Visualizer</a></h1>
                <p>Developed a web application to visualize a gantt-chart for various CPU scheduling algorithms like FCFS, Shortest Job
                    First and Round Robin Scheduling.</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Projects