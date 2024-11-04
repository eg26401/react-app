import "./Header.css"; // You can add custom styles in a CSS file or use inline styles

function Header() {
  let loggedIn = false;
  if (loggedIn == false) return;

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="/">tube route finder</a>
          </div>

          <nav className="nav-menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>

          <div className="auth-buttons">
            <a href="/login" className="login-btn">
              Login
            </a>
            <a href="/signup" className="signup-btn">
              Sign Up
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
