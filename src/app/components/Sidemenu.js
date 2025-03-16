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
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Expertise</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </>
  );
}

export default Sidemenu;
