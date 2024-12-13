import React from "react";
import "./AboutPage.css"; // Import the CSS for the About page

function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Router</h1>
        <p>Discover the history and charm of the London Underground.</p>
      </header>
      <section className="about-history">
        <h2>The History of the London Underground</h2>
        <p>
          Opened in 1863, the London Underground is the world’s first
          underground railway system. Known affectionately as "The Tube," it has
          grown to encompass 11 lines and 272 stations, connecting millions of
          passengers daily across London and beyond.
        </p>
        <p>
          Over the years, the Tube has become an iconic part of London’s
          culture, celebrated for its distinctive map design, diverse
          architecture, and world-famous roundel logo.
        </p>
        <div className="about-images">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c7/London_Underground_150th_Anniversary_Train.jpg"
            alt="Vintage Tube Train"
            className="history-image"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tube_map.png"
            alt="Classic Tube Map"
            className="history-image"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Oxford_Circus_Tube_station_entrance.JPG"
            alt="Modern Tube Station"
            className="history-image"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
