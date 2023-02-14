// login component 
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email:username,
        password,
      });
      console.log('logged in')
      localStorage.setItem("token", response.data.token);
      navigate('/profile');
      // Go to homepage upon sign in, maybe change to a profile page?
    } catch (error) {
      console.error('error:' + error);
      // Feedback if there is an issue with sign in
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
