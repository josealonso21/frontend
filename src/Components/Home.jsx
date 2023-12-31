import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";
import home from "../img/home.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="neko-home">
      <div className="home-content">
        <div className="welcome">
          <h1>NEKO</h1>
          <h3>Welcome, my cat</h3>
          <h4>Let's start!</h4>
          <br />
          <p>Now you're team cats, NOT dogs, rabbits... other.</p>
          <p>We'll keep that in mind</p>
        </div>
        <div className="home-buttons">
          <button
            className="login"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </button>
          <button
            className="signup"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <img src={home} alt="home" />
    </div>
  );
};
export default Home;
