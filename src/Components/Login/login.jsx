import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import "./login.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button 
      variant="light" 
      className="login_logout"
      onClick={() => loginWithRedirect()}
    >
        Log In
    </Button>
    )
};

export default LoginButton;