import React from "react";
import "./ResultsDisplay.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Define the types
interface RouteSegment {
  lineName: string;
  color: string; // Hex or named color for the tube line
  from: string;
  to: string;
  stops: string[];
}

interface Route {
  from: string;
  to: string;
  via: string[];
  duration: string;
  segments: RouteSegment[];
}

const ResultsDisplay: React.FC<{ route: Route }> = ({ route }) => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-primary">London Underground Route</h5>
          <p className="card-text">
            <strong>From:</strong> {route.from}
          </p>
          <p className="card-text">
            <strong>To:</strong> {route.to}
          </p>
          {route.via.length > 0 && (
            <p className="card-text">
              <strong>Via:</strong> {route.via.join(", ")}
            </p>
          )}
          <p className="card-text">
            <strong>Duration:</strong> {route.duration}
          </p>
          {/* Button to toggle collapsible detailed route */}
          <button
            className="btn btn-primary mt-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#detailedRoute"
            aria-expanded="false"
            aria-controls="detailedRoute"
          >
            View Detailed Route
          </button>
        </div>
        {/* Collapsible Detailed Route */}
        <div className="collapse" id="detailedRoute">
          <div className="card-body">
            <h6 className="text-secondary">Detailed Route:</h6>
            <div className="list-group">
              {route.segments.map((segment, index) => (
                <div
                  key={index}
                  className="list-group-item d-flex align-items-start"
                >
                  {/* Line color indicator */}
                  <div
                    className="line-indicator"
                    style={{ backgroundColor: segment.color }}
                  ></div>
                  {/* Segment Details */}
                  <div className="segment-details ms-3">
                    <h6 className="mb-1">{segment.lineName}</h6>
                    <p className="mb-1">
                      <strong>From:</strong> {segment.from}
                    </p>
                    <p className="mb-1">
                      <strong>To:</strong> {segment.to}
                    </p>
                    <p className="mb-0">
                      <strong>Stops:</strong> {segment.stops.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
