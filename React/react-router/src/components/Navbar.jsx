import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/login"><li>Login</li></NavLink>

        {/* <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/login"><li >Login</li></a> */}
      </nav>
    </div>
  )
}

export default Navbar
