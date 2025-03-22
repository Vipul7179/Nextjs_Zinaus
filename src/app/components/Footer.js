import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Sculpnova</h3>
          <p>Innovative IT Solutions</p>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="about-us">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
        <a href="#" className="social-icon"><FaFacebookSquare  size={38} /></a>
          <a href="#" className="social-icon"><FaLinkedin size={38} /></a>
          <a href="#" className="social-icon"><FaSquareXTwitter size={38} /></a>
          <a target='blank' href="https://www.instagram.com/sculpnova/#" className="social-icon"><FaSquareInstagram  size={39}  /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Sculpnova. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer