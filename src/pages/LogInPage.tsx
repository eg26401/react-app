import React from "react";
import "./LogIn.css"; // Import the CSS file

function LogInPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="text-center mb-4">Log In</h1>
        <div className="card-body">
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Enter your email address"
          />
          <input
            className="form-control mb-4"
            type="password"
            placeholder="Enter your password"
          />
          <button className="btn btn-primary w-100 mb-3">Submit</button>
          <a href="/forgottenpassword" className="forgot-password-link">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
