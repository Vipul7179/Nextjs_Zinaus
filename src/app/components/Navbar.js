import React from 'react'

const Navbar = () => {
  return (
    <header className="header">
    <div className="logo">
      {/* <h1>Zinaus</h1> */}
      <a href="#">
    <img src="/Zinaus_new-removebg-preview_enhanced.png" alt="Zinaus Logo" />
  </a>
    </div>
    <nav className="navigation">
      <ul>
      <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Career</a></li>
        <li><a href="#">Expertise</a></li>
        <li className='navbutoon'>
        <a className="navcontactbutton text-white hover:text-white">Contact Us</a>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Navbar