import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Zinaus</h3>
          <p>Innovative IT Solutions</p>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">LinkedIn</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Zinaus. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer