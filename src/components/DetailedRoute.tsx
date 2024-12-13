import React from "react";
import "./DetailedRoute.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Define the type for a route segment
interface RouteSegment {
  lineName: string;
  color: string; // Hex or named color for the tube line
  from: string;
  to: string;
  stops: string[];
}

const DetailedRoute: React.FC<{ segments: RouteSegment[] }> = ({
  segments,
}) => {
  return (
    <div className="container mt-4">
      <h3 className="mb-3">Detailed Route</h3>
      <div className="list-group">
        {segments.map((segment, index) => (
          <div key={index} className="list-group-item d-flex align-items-start">
            {/* Line color indicator */}
            <div
              className="line-indicator"
              style={{ backgroundColor: segment.color }}
            ></div>
            {/* Segment Details */}
            <div className="segment-details ms-3">
              <h5 className="mb-1">{segment.lineName}</h5>
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
  );
};

export default DetailedRoute;
