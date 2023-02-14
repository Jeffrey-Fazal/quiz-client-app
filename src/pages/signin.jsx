// This is the sign in page
import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";
import React from "react";
import SignUp from "../components/sign_up";
import Login from "../components/log_in";

function LoginPage() {
  return (
    <div>
        <NavBar />
        {/* Sign up component is only a form, hence h2 */}
        <h2>Sign Up</h2>
        <SignUp />
        {/* Login form header */}
        <h2>Log in</h2>
        <Login />
        <NavBarFooter />
    </div>
  );
}

export default LoginPage;
