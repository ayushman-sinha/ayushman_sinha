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
    textShadow:'2px 2px 8px black',
    


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
            <li><NavLink to='/' style={({ isActive }) =>isActive ? activeStyle : undefined} onClick={handleShowNavbar}>About Me</NavLink></li>
            <li><NavLink to='/skills'  style={({ isActive }) =>isActive ? activeStyle : undefined} onClick={handleShowNavbar}>Skills</NavLink></li>
            <li><NavLink to='/projects'  style={({ isActive }) =>isActive ? activeStyle : undefined} onClick={handleShowNavbar}>Projects</NavLink></li>
            <li><NavLink to='/coding'  style={({ isActive }) =>isActive ? activeStyle : undefined} onClick={handleShowNavbar}>Coding</NavLink></li>
            <li><NavLink to='/contact'  style={({ isActive }) =>isActive ? activeStyle : undefined} onClick={handleShowNavbar}>Contact Me</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar