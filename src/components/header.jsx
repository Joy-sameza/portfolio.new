import React from "react";
import blur from "../static/images/header-low-res.jpg";
import bgi from "../static/images/header.jpg";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <header id="home">
      <img src={blur} alt="" />
      <img src={bgi} alt="" />
      <nav>
        <a className="logo" tabIndex="1" href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="105"
            height="57"
            viewBox="0 0 105 57"
            version="1.1"
          >
            <path
              d="M 35.826 16.956 C 34.312 19.616, 33.791 19.840, 30.408 19.291 C 27.009 18.740, 26.738 18.859, 27.461 20.592 C 29.299 24.996, 29.209 26.818, 27.100 27.947 C 24.084 29.561, 24.514 31.734, 28 32.500 C 30.481 33.045, 31 33.654, 31 36.020 C 31 39.828, 32.379 40.480, 35.957 38.366 C 38.740 36.722, 39.032 36.719, 40.788 38.308 C 43.683 40.928, 45 40.363, 45 36.500 C 45 34.575, 45.421 33, 45.935 33 C 50.748 33, 52.287 30.909, 49.565 28.068 C 47.283 25.686, 47.004 24.860, 47.910 23.167 C 49.828 19.585, 49.283 18.724, 45.545 19.426 C 42.421 20.012, 41.939 19.782, 40.519 17.037 C 38.569 13.266, 37.931 13.255, 35.826 16.956 M 58.464 15.250 C 58.075 16.254, 56.745 17, 55.343 17 C 53.311 17, 53.065 17.294, 53.880 18.749 C 54.581 20.004, 54.433 20.969, 53.356 22.159 C 52.006 23.651, 52.064 23.886, 53.927 24.477 C 55.082 24.844, 56 25.990, 56 27.067 C 56 29.168, 57.476 29.656, 58.554 27.913 C 59.038 27.130, 59.530 27.130, 60.313 27.913 C 61.953 29.553, 63 29.224, 63 27.067 C 63 25.990, 63.918 24.844, 65.073 24.477 C 66.936 23.886, 66.994 23.651, 65.644 22.159 C 64.567 20.969, 64.419 20.004, 65.120 18.749 C 65.921 17.318, 65.701 17, 63.910 17 C 62.706 17, 61.141 16.212, 60.432 15.250 C 59.204 13.583, 59.111 13.583, 58.464 15.250"
              stroke="none"
              fill="#8fff00"
              fillRule="evenodd"
            />
          </svg>
        </a>
        <div className="menu-icon">
          <FiMenu />
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#service">Service</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#" className="button">
          Get in Touch
        </a>
      </nav>
      <h1 role="contentinfo" aria-label="my-name">
        Kenfack Sameza
      </h1>
      <p className="hero">
        Hello, my name is Kenfack Sameza, nice to meet you. I would like to
        welcome you with my personal portfolio.
      </p>
      <div className="scroll-icon">
        <span>
          <svg
            className="scroll"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 79.37 122.88"
          >
            <g>
              <path d="M50.2,121.63c6.71-1.85,12.72-5.44,17.51-10.23c7.19-7.19,11.65-17.11,11.65-28.03V39.68c0-10.92-4.46-20.84-11.65-28.03 C60.52,4.46,50.6,0,39.68,0C28.77,0,18.84,4.46,11.65,11.65C4.46,18.84,0,28.77,0,39.68v43.68c0,10.92,4.46,20.84,11.65,28.03 c5.59,5.59,12.82,9.53,20.89,11.01C37.42,123.3,45.7,122.87,50.2,121.63L50.2,121.63L50.2,121.63z M39.23,92.06 c4.15,0,7.55-3.4,7.55-7.55v-7.78c0-4.15-3.4-7.55-7.55-7.55c-4.15,0-7.55,3.4-7.55,7.55v7.78C31.68,88.66,35.07,92.06,39.23,92.06 L39.23,92.06z M61.08,104.77c-5.49,5.49-13.07,8.91-21.4,8.91c-8.33,0-15.9-3.41-21.4-8.91c-5.49-5.49-8.91-13.07-8.91-21.4V39.68 c0-8.33,3.41-15.9,8.91-21.4c5.49-5.49,13.07-8.91,21.4-8.91c8.33,0,15.9,3.41,21.4,8.91c5.49,5.49,8.91,13.07,8.91,21.4v43.68 C69.99,91.7,66.58,99.27,61.08,104.77L61.08,104.77L61.08,104.77z" />
            </g>
          </svg>
        </span>
      </div>
      <div className="clients">
        <h3>Our Client</h3>
        <p className="client-brief">
          More than 30 Clients who have worked with me
        </p>
        <ul>
          <li>MCS Cameroon</li>
          <li>first</li>
          <li>second</li>
          <li>third</li>
          <li>fourth</li>
        </ul>
      </div>
    </header>
  );
}
