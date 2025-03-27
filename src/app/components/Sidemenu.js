import React, { useState } from "react";
import Link from "next/link";

function Sidemenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to open the menu */}
      <button onClick={toggleMenu} className="mobile-menubutton">☰</button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={toggleMenu} className="close-button">
  <img src="/Images/sculpnovalogowithbackground.jpg" alt="Close" className="button-icon" />
  ✖
</button>
        <ul>
          <li className="nav-itemm"><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li className="nav-itemm"><Link href="/about-us" onClick={toggleMenu}>About Us</Link></li>
          <li className="nav-itemm"><Link href="/services" onClick={toggleMenu}>Services</Link></li>
          <li className="nav-itemm"><Link href="/expertise" onClick={toggleMenu}>Expertise</Link></li>
          <li className="nav-itemm"><Link href="/career" onClick={toggleMenu}>Career</Link></li>
          <li className="nav-itemm"><Link href="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Sidemenu;
