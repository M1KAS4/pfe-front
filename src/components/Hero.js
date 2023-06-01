import React from "react";
import { Button } from "./Button";
import "../assets/css/hero.css";
import "../assets/css/app.css";
import bin from "../assets/images/bin.jpg";
import Navbar from "../components/Navbar";
function Hero() {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <img src={bin} autoPlay loop muted />
        <h1>REDUCE, REUSE, ECYCLE</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Join us now!
          </Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
