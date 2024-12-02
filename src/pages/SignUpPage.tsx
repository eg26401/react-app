import React, { useState } from "react";
import UseUserStore from "./UseUserStore.tsx"; // Ensure this is correctly exported
import "./SignUp.css"; // Import the CSS file for styling

function SignUpPage() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { createUser } = UseUserStore();

  const handleAddUser = async () => {
    const { success, message } = await createUser(newUser);

    if (!success) {
      console.error("User creation failed:", message);
      return;
    }

    setNewUser({ name: "", email: "", password: "" });
    console.log("User created successfully:", message);
  };

  // Calculate progress
  const filledFields = Object.values(newUser).filter(
    (field) => field !== ""
  ).length;
  const progressPercentage = (filledFields / 3) * 100; // 3 fields to complete

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Progress bar */}
        <div className="progress signup-progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: `${progressPercentage}%` }}
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>

        <h1 className="text-center mb-4">Sign Up</h1>

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter your email address"
          name="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />

        <input
          className="form-control mb-4"
          type="password"
          placeholder="Enter a password"
          name="password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleAddUser}
          disabled={filledFields < 3}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
