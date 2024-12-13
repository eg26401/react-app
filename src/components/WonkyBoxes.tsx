import React from "react";
import "./WonkyBoxes.css"; // CSS file for custom styles

function WonkyBoxes() {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="wonky-box box-1">
            <h3>Enter your start and end points</h3>
            <p>
              Enter your starting station and destination for us to work the
              route out for you
            </p>
            <span className="step-num-odd">01</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="wonky-box box-2">
            <h3> Select your filters</h3>
            <p>
              Choose from the suggested routes based on factors like travel
              time, number of changes, and station accessibility.
            </p>
            <span className="step-num-even">02</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="wonky-box box-3">
            <h3>Choose your route </h3>
            <p>
              View the routes carefully curated for you and select the one you'd
              like to use.
            </p>
            <span className="step-num-odd">03</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="wonky-box box-4">
            <h3>Follow the directions</h3>
            <p>
              Arrive at your destination hassle-free by following the
              recommended route and transfer information.
            </p>
            <span className="step-num-even">04</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WonkyBoxes;
