import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ForgotPasswordPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Forgot Password</h1>
          <p className="text-muted text-center mb-4">
            Enter your email address, and we’ll send you instructions to reset
            your password.
          </p>
          <form>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
