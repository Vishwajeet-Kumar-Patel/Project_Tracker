import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Address Section */}
        <div className="footer-section">
          <h4>Address</h4>
          <p>Varanasi, Uttar Pradesh</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            <a href="tel:+919656912136" className="footer-link">📞 +91 9656912136</a>
          </p>
          <p>
            <a href="mailto:vishwajeetkumarpatelmgs@gmail.com" className="footer-link">
              ✉ vishwajeetkumarpatelmgs@gmail.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-section social-links">
          <h4>Follow Us</h4>
          <a href="https://twitter.com/the_dead_vibe"><i className="fab fa-twitter"> Twitter</i></a>
                 <a href="https://www.instagram.com/vishwajeet_kumar_patel/"><i className="fab fa-instagram"> Instagram</i></a>
                  <a href="https://www.linkedin.com/in/vishwajeet-kumar-00b817239/"><i className="fab fa-linkedin"> LinkedIn</i></a>
                 <a href="https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh/@25.3207397,82.9087075,12z/data=!3m1!4b1!4m6!3m5!1s0x398e2db76febcf4d:0x68131710853ff0b5!8m2!3d25.3176452!4d82.9739144!16zL20vMDFqOTIy?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                <i className="fab fa-google">Google Maps</i></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Project Tracker By Vishwajeet | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
