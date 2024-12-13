import React from "react";
import "./LogIn.css"; // Styling in CSS

function LogInPage() {
  return (
    <div className="login-container">
      <div className="tube-lines-background">
        <div className="line central-line"></div>
        <div className="line piccadilly-line"></div>
        <div className="line circle-line"></div>
        <div className="line jubilee-line"></div>
      </div>
      <div className="login-card">
        <h1 className="login-title">Welcome to Tube Finder</h1>
        <div className="card-body">
          <input
            className="form-control login-input"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="form-control login-input"
            type="password"
            placeholder="Password"
          />
          <button className="btn btn-primary login-button">Log In</button>
          <a href="/forgottenpassword" className="forgot-password-link">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
