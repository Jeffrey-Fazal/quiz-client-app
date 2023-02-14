import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/users", {
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        }
      });

      console.log(response.data);
      // Need to add action upon signup
    } catch (error) {
      console.error(error);
      // Give feedback if there is a problem, server down or something?
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
      <label>password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
      <label>confirm password</label>
        <input
          type="password"
          placeholder="password again :)"
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
