import React, { useState } from "react";

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
          <li class="nav-itemm"><a href="/">Home</a></li>
          <li class="nav-itemm"><a href="/about-us">About Us</a></li>
          <li class="nav-itemm"><a href="/services">Services</a></li>
          <li class="nav-itemm"><a href="expertise">Expertise</a></li>
          <li class="nav-itemm"><a href="/career">Career</a></li>
          <li class="nav-itemm"><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </>
  );
}

export default Sidemenu;
