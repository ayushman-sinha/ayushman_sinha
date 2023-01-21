// import {useState} from 'react'
// import './Navbar.css'
// import {GoThreeBars} from 'react-icons/go'
// const Navbar = () => {
    
    
//   return (
//     <div>
//         <ul className='list_edit nav_collapse' >
//           <li className=''><GoThreeBars size='40'/></li>
//         </ul>
//       {/* <ul className='list_edit'>          
//           <li>About Me</li>
//           <li>Skills</li>
//           <li>Projects</li>
//           <li>Coding</li>
//           <li>Contact Me</li>                        
//       </ul> */}
       
        
//     </div>
//   )
// }

// export default Navbar
import { useState } from 'react'
import {GoThreeBars} from 'react-icons/go'
import './navbar1.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GoThreeBars size='40' color='white' className='bar_edit'/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Coding</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar