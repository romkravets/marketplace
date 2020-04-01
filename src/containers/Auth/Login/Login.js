import React, { useState } from "react";
import { Link } from "react-router-dom";
const login = (props) => {
  const [isSignup, setIsSignup] = useState(true);
  const switchAuthModeHandler = () => {
    // this.setState( prevState => {
    //     return { isSignup: !prevState.isSignup };
    // } );
    setIsSignup(!isSignup);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <p>I already have an account</p>
        <Link to="/auth/registration">Register</Link>
      </div>
    </div>
  );
};

export default login;
