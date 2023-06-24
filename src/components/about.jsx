import React from "react";
import Decoration from "./decoration";

export default function About() {
  return (
    <section className="about" id="about">
      <h3 className="styled">About Me</h3>
      <h2>I can deliver results that exceed your expectations.</h2>
      <a
        href="mailto:samgaming500@gmail.com?subject=I%20want%20to%20hire%20you%20for&body=Hi%2C%20I%20wish%20to%20hire%20you%20for"
        className="button hire-me"
      >
        Hire Me &rarr;
      </a>
      <div className="p">
        <p>
          Hi, I'm Kenfack Sameza I have an Understanding of the relationship
          between design and users through detailed execution and proper user
          experience. I love working on interesting and meaningful projects that
          I can be proud of, and I always strive to create clean, pixelated
          interfaces that are smoothly animated. I prefer to prioritize not only
          code but also quality, perfect graphic design and optimized
          development.
        </p>
      </div>
      <div className="numbers">
        <div className="number">
          <span>
            <strong>
              123<em>+</em>
            </strong>
            <small>Projects Completed</small>
          </span>
          <span>
            <strong>
              45<em>+</em>
            </strong>
            <small>Clients World Wide</small>
          </span>
          <span>
            <strong>
              2<em>+</em>
            </strong>
            <small>Years of Experience</small>
          </span>
        </div>
      </div>
      <Decoration />
    </section>
  );
}
