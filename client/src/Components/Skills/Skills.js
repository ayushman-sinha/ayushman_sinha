import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skill_container'>
      <div className='large_text_skills'>
            Skills
       </div>
      <ul className='list_edit_skill skill_container_inner'>
        <li className='skill_container_content'>
              <div className='skill_container_heading'>Data Structures</div>
                <div className='skill_box'><div className='skill_box_1'></div></div>          
         </li>
        <li className='skill_container_content'>        
             <div className='skill_container_heading'>Algorithms</div>
              <div className='skill_box'><div className='skill_box_2'></div></div>         
        </li>
        <li className='skill_container_content'>          
              <div className='skill_container_heading'>Problem Solving</div>
                <div className='skill_box'><div className='skill_box_3'></div></div>
        </li>
        <li className='skill_container_content'>          
              <div className='skill_container_heading'>Node JS</div>
                <div className='skill_box'><div className='skill_box_4'></div></div>
        </li> 
        <li className='skill_container_content'>
            <div className='skill_container_heading'>React JS</div>
            <div className='skill_box'><div className='skill_box_5'></div></div>          
        </li>
        <li className='skill_container_content'>          
            <div className='skill_container_heading'>Operating System</div>
            <div className='skill_box'><div className='skill_box_6'></div></div>          
        </li>
      </ul>
      
    </div>
  )
}

export default Skills