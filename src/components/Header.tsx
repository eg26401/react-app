import { Box, Flex, Link } from "@chakra-ui/react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Box
        className="container"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box className="logo">
          <Link href="/" className="logo-link">
            tube route finder
          </Link>
        </Box>

        <Flex as="nav" className="nav-menu">
          <Link href="/" mx={2}>
            Home
          </Link>
          <Link href="/about" mx={2}>
            About
          </Link>
        </Flex>

        <Flex className="auth-buttons">
          <Link href="/login" className="login-btn" mr={2}>
            Login
          </Link>
          <Link href="/signup" className="signup-btn">
            Sign Up
          </Link>
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
