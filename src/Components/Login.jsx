import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/Login.css";
import login from "../img/login.png";
const API = process.env.REACT_APP_NEKO;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
    } else {
      navigate(`/CreateJoinGame/${username}`);
    }
  };

  return (
    <div className="login-main">
      <h2>Just log in!</h2>
      <p className="miau">MIAU</p>
      <div className="content">
        <img src={login} alt="" />
        <div className="form-and-others">
          <h2>Hi, . . . !</h2>
          <h3 className="miau">You again?</h3>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
