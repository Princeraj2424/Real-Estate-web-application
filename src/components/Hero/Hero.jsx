import React from "react";
import CountUp from "react-countup";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero-wrapper"
      style={{ backgroundImage: "url(/hero-image.png)" }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            Find Your <span>Dream</span> Home
          </h1>

          <p className="hero-subtitle">
            Explore the best properties in your city with us. Buy, sell, or rent hassle-free.
          </p>

          <div className="hero-search-bar">
            <input
              type="text"
              placeholder="Search by city, neighborhood, or ZIP"
            />
            <button>Search</button>
          </div>

          <div className="hero-actions">
            <button className="cta-btn">Get Started</button>
            <button className="cta-outline-btn">Schedule a Visit</button>
          </div>

          <div className="hero-stats">
            <div>
              <span className="stat-number">
                <CountUp end={500} duration={2} />+
              </span>
              <span className="stat-text">Happy Customers</span>
            </div>
            <div>
              <span className="stat-number">
                <CountUp end={1200} duration={2} />+
              </span>
              <span className="stat-text">Properties Sold</span>
            </div>
            <div>
              <span className="stat-number">
                <CountUp end={300} duration={2} />+
              </span>
              <span className="stat-text">Agents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
