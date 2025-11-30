import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="f-wrapper">
      <div className="f-container">
        <div className="f-left">
          <img src="./logo2.png" alt="Logo" width={140} />
          <p>Your dream home awaits. We help you find the best properties at the best prices.</p>
          <div className="f-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>

        <div className="f-center">
          <span>Quick Links</span>
          <a href="#home">Home</a>
          <a href="#residencies">Residencies</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="f-right">
          <span>Contact</span>
          <span>123 Dream Street, City, Country</span>
          <span>Email: info@realestate.com</span>
          <span>Phone: +91 98765 43210</span>
        </div>
      </div>

      <div className="f-bottom">
        <span>© {new Date().getFullYear()} Real Estate. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
