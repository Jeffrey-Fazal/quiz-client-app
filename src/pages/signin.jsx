import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";
import React from "react";
import SignUp from "../components/sign_up";
import Login from "../components/log_in";

function LoginPage() {
  return (
    <div>
        <NavBar />
      <h1>Sign Up</h1>
        <SignUp />
        <h1>Log in</h1>
        <Login />
        <NavBarFooter />
    </div>
  );
}

export default LoginPage;
