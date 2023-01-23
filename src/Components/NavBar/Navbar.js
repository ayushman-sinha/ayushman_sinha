import { useState } from 'react'
import {GoThreeBars} from 'react-icons/go'
import './navbar1.css';
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  let activeStyle = {
    color:'#FF5F6D',
   
  };
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
            <li><NavLink to='/' style={({ isActive }) =>isActive ? activeStyle : undefined}>About Me</NavLink></li>
            <li><NavLink to='/skills'  style={({ isActive }) =>isActive ? activeStyle : undefined}>Skills</NavLink></li>
            <li><NavLink to='/projects'  style={({ isActive }) =>isActive ? activeStyle : undefined}>Projects</NavLink></li>
            <li><NavLink to='/coding'  style={({ isActive }) =>isActive ? activeStyle : undefined}>Coding</NavLink></li>
            <li><NavLink to='/contact'  style={({ isActive }) =>isActive ? activeStyle : undefined}>Contact Me</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar