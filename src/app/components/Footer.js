import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Link from 'next/link';
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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="about-us">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
        <Link target='blank' href="https://www.facebook.com/profile.php?id=61575158273501" className="social-icon"><FaFacebookSquare  size={38} /></Link>
          {/* <Link href="#" className="social-icon"><FaLinkedin size={38} /></Link> */}
          {/* <Link href="#" className="social-icon"><FaSquareXTwitter size={38} /></Link> */}
          <Link target='blank' href="https://www.instagram.com/sculpnova/#" className="social-icon"><FaSquareInstagram  size={39}  /></Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Sculpnova. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer