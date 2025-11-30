import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <img src="logo.png" alt="AK Logo" className="footer-logo" />
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#residencies">Residencies</a></li>
            <li><a href="#value">Value</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>📍 Hanuman Nagar, Patna, Bihar</p>
          <p>📞 6200311773</p>
          <p>✉️ nicksingh914@gmail.com</p>
          <div className="social-icons">
            <a href="#" className="facebook"><FaFacebookF /></a>
            <a href="#" className="instagram"><FaInstagram /></a>
            <a href="#" className="linkedin"><FaLinkedinIn /></a>
            <a href="#" className="whatsapp"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AK Real Estate | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
