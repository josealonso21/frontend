import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Signup.css";
import signup from "../img/signup.png";
const API = process.env.REACT_APP_NEKO;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password1 === password) {
      const res = await fetch(`${API}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      });
      const data = await res.json();
      if (!data.sucess) {
        alert(data.error);
      } else {
        navigate(`/CreateJoinGame/${username}`);
      }
    } else {
      alert("Not the same password");
    }
  };

  return (
    <div className="signup-main">
      <h2>Please, sign up!</h2>
      <p className="miau">MIAU</p>
      <div className="signup-content">
        <img src={signup} alt="signup" />
        <div className="form-and-others">
          <h2>Do it right now! please?</h2>
          <h3 className="miau">Actually, it's an order</h3>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
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
            <input
              type="password"
              name="password1"
              id="password1"
              placeholder="confirm password"
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
            />
            <button type="submit" className="login-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
