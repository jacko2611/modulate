import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const LandingPage = () => {
  return (
    <div className="container">
      <h1>Modulate</h1>
      <Link to="/home">
        <button></button>
      </Link>
    </div>
  );
};

export default LandingPage;