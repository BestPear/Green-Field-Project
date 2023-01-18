import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../HomePage/Home";

function Signup() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/login")
  }
  return (
    <div className="authForm-container">
      <>
        <form onSubmit={handleSubmit} className= "signup-login">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Please enter username"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>{" "}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Please enter your password"
            name="password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Please enter your email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <button type="submit"> REGISTER </button>
        </form>
        <p>
          {" "}
          Already have an account? <a href="/login">Login</a> here
        </p>
      </>
    </div>
  );
}

export default Signup;
