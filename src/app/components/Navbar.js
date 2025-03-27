"use client";
import React from 'react'
import Link from 'next/link';
import Sidemenu from "./Sidemenu";

const Navbar = () => {
  return (
    <header className="header">
    <div className="logo">
      {/* <h1>Zinaus</h1> */}
      <Link href="/">
    <img src="/Images/sculpnovalogowithbackground.jpg" alt="Zinaus Logo" />
  </Link>
  
    </div>
    {/* Side Menu Component */}
    <Sidemenu/>
    {/* <div  className='mobile-menubutton' >
      <img src="/Images/hamburger.png" alt="burger menu" />
      </div> */}
    <nav className="navigation">
      <ul>
      {/* <li><a href="/about-us">About Us</a></li> */}
      <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/career">Career</Link></li>
        <li><Link href="/expertise">Expertise</Link></li>
        <li className='navbutoon'>
        <Link href='/contact' className="navcontactbutton text-white hover:text-white">Contact Us</Link>
        </li>
      </ul>

      
    </nav>
  </header>
  )
}

export default Navbar