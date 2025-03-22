"use client";
import React from 'react'
import Sidemenu from "./Sidemenu";

const Navbar = () => {
  return (
    <header className="header">
    <div className="logo">
      {/* <h1>Zinaus</h1> */}
      <a href="/">
    <img src="/Images/sculpnovalogowithbackground.jpg" alt="Zinaus Logo" />
  </a>
  
    </div>
    {/* Side Menu Component */}
    <Sidemenu/>
    {/* <div  className='mobile-menubutton' >
      <img src="/Images/hamburger.png" alt="burger menu" />
      </div> */}
    <nav className="navigation">
      <ul>
      <li><a href="/about-us">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/career">Career</a></li>
        <li><a href="/expertise">Expertise</a></li>
        <li className='navbutoon'>
        <a href='/contact' className="navcontactbutton text-white hover:text-white">Contact Us</a>
        </li>
      </ul>

      
    </nav>
  </header>
  )
}

export default Navbar