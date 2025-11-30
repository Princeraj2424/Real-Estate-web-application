import React from 'react';
import './Information.css';
import { FiArrowRight } from 'react-icons/fi';

const Information = () => {
  return (
    <section className="I-wrapper">
      <div className="I-container">
        <div className="I-content">
          <h1 className="I-primaryText">
            Get Started With <span>AK Real Estate</span>
          </h1>
          <p className="I-secondaryText">
            Find Your Residence Quickly and Securely
          </p>
          <a href="mailto:nicksingh914@gmail.com" className="I-button">
            Get Started <FiArrowRight className="I-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Information;
