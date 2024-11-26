import { Box } from "@chakra-ui/react";

function LogInPage() {
  return (
    <>
      <div>
        <h1>Login Page</h1>
        <Box>
          <input
            className="input_box"
            type="text"
            placeholder="Enter your email address "
          />
          <input
            className="input_box"
            type="password"
            placeholder="Enter your password "
          />
          <button className="button" />
          <a href="#">Forgot password</a>
        </Box>
      </div>
    </>
  );
}

export default LogInPage;
