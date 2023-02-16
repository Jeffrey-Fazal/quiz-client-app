// In Development, code from login for reference
// TODO: This script should get the toekn from local storage and check if the user is valid and who they are
// endpoitn will give us who they are, need to find a place to store it.


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const TokenVerification = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("https://mighty-eyrie-05838.herokuapp.com/verify", {
//         email: username,
//         password,
//       });
//       console.log("Logged in");
//       localStorage.setItem("token", response.data.token);
//       navigate("/");
//     } catch (error) {
//       console.error("Error: " + error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(event) => setUsername(event.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default TokenVerification;