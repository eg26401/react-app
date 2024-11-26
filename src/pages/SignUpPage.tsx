import { useState } from "react";
import { useUserStore } from "./user.js"; // Make sure useUserStore is exported correctly from the store

function SignUpPage() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { createUser } = useUserStore();

  const handleAddUser = async () => {
    const { success, message } = await createUser(newUser);

    if (!success) {
      // Display an error message using a toast notification or other alert UI
      // For example: toast.error(message);
      console.error("User creation failed:", message);
      return;
    }

    // Optionally clear form or provide user feedback
    setNewUser({ name: "", email: "", password: "" });
    console.log("User created successfully:", message);
    // Optionally, display a success message or redirect
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        className="input_box"
        type="text"
        placeholder="Enter your name"
        name="name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />

      <input
        className="input_box"
        type="text"
        placeholder="Enter your email address"
        name="email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        className="input_box"
        type="password"
        placeholder="Enter a password"
        name="password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <button onClick={handleAddUser}>Sign Up</button>
    </div>
  );
}

export default SignUpPage;
