import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate("")

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <>
        <form onSubmit={handleSubmit}>
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
          <button type="submit"> LOGIN </button>
        </form>
        <p> Don't have an account? <a href="/signup">Sign Up</a> here</p>
      </>
    </div>
  );
}

export default Login;
