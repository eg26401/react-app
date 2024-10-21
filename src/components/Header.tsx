import "./Header.css"; // You can add custom styles in a CSS file or use inline styles

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="/">MyWebsite</a>
          </div>

          <nav className="nav-menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
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
};

export default Header;
