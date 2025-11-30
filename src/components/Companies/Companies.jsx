import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="innerWidth flexCenter c-container">
        <img src="pro.png" alt="Company 1" />
        <img src="tower.png" alt="Company 2" />
        <img src="equinix.png" alt="Company 3" />
        <img src="realty.png" alt="Company 4" />
      </div>
    </section>
  );
};

export default Companies;
