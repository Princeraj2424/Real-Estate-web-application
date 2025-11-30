import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`h-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="h-container">
        <div className="h-logo-container">
          <img src="/logo.png" alt="Logo" className="h-logo" />
        </div>
        <nav className={`h-menu ${menuOpen ? "active" : ""}`}>
          <a href="#">Residencies</a>
          <a href="#">Our Value</a>
          <a href="#">Contact Us</a>
          <a href="#">Get Started</a>
          <button className="btn">Contact</button>
        </nav>
        <div className="menu-toggle" onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>
    </header>
  );
};

export default Header;
