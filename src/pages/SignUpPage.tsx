function SignUpPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <input className="input_box" type="text" placeholder="Enter your name " />
      <input
        className="input_box"
        type="text"
        placeholder="Enter your email address "
      />
      <input
        className="input_box"
        type="password"
        placeholder="Enter a password "
      />
      <button>sign up</button>
    </div>
  );
}

export default SignUpPage;
