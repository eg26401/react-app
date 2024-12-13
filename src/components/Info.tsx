import React from "react";
import "./Info.css"; // Optional: for styling

const Info: React.FC = () => {
  return (
    <div className="home-screen">
      <img
        src="https://via.placeholder.com/300" // Replace with your image URL
        alt="Home"
        className="home-image"
      />
      <div className="info-boxes">
        <div className="info-box">
          <h2>Search Now</h2>
          <p>Find what you need quickly and easily.</p>
        </div>
        <div className="info-box">
          <h2>Filter by Least Changeover</h2>
          <p>Choose options that minimize changeover times.</p>
        </div>
        <div className="info-box">
          <h2>Wheelchair Accessibility Option</h2>
          <p>Explore options that are accessible for everyone.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
