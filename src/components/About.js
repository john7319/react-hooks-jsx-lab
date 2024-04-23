import React from "react";
import { image } from "../data/data";

const AboutElement = (
  <div id="about">
    <h2>About Me</h2>
    <p>This Is My Website</p>
    <img src= {image} alt="I made this" />
  </div>
)

function About() {
  return <>{AboutElement}</>;
}

export default About;
