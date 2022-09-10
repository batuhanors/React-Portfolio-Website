import React from "react";

import "./Footer.css";

import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import navIcon4 from "../assets/nav-icon4.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-basic">
        <div className="footer-icon">
          <span>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/batuhan-ors-b910b5203/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1}></img>
              </a>
              <a
                href="https://github.com/batuhanors"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2}></img>
              </a>
              <a
                href="https://www.instagram.com/batuhan.ors_"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3}></img>
              </a>
              <a
                href="https://open.spotify.com/artist/0FKAb96GrnMHpdBYdYWfCA"
                target="_blank"
              >
                <img src={navIcon4}></img>
              </a>
            </div>
          </span>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#home">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="list-inline-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="list-inline-item">
            <a href="#about">About</a>
          </li>
        </ul>
        <p className="copyright">Batuhan Örs | 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
