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
          <li className="nav-itemm"><Link href="/">Home</Link></li>
          <li className="nav-itemm"><Link href="/about-us">About Us</Link></li>
          <li className="nav-itemm"><Link href="/services">Services</Link></li>
          <li className="nav-itemm"><Link href="expertise">Expertise</Link></li>
          <li className="nav-itemm"><Link href="/career">Career</Link></li>
          <li className="nav-itemm"><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Sidemenu;
