import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

import photo1 from "../assets/Synthwave.png";
import photo2 from "../assets/music.png";
import photo3 from "../assets/teknofest1.jpg";
import photo4 from "../assets/sunum.jpg";
import photo5 from "../assets/teknofest2.jpeg";

const About = () => {
  // some func

  return (
    <section id="about" className="about-section">
      <Container>
        <h2>About</h2>
        <Row className="info-section">
          <Col lg={4} className="info-photo"></Col>
          <Col lg={8} className="info-desc">
            <h3>
              Hey there! Thanks for wisiting my website! <br></br> Let me tell
              you about myself..
            </h3>
            <p>
              My name is Batuhan, I was born in 1998. I'm currently living in
              Ankara, Turkey. I have a bachelor degree of Computer Engineering
              since this summer. As a passionate web developer candidate, I have
              developed multiple web apps like this one using various
              technologies. I have quite knowledge about both frontend and
              backend for a Junior position. If you want to check out my skills
              you can go to my skills section above. Also, I make music in my
              free time. You can listen to my work on spotify or any other music
              streaming platform!{" "}
              <span className="info-desc-link">
                <a
                  href="https://open.spotify.com/artist/0FKAb96GrnMHpdBYdYWfCA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Just click here!
                </a>
              </span>
            </p>
          </Col>
        </Row>
        <Row className="image-container">
          <Col lg={3} className="about-img">
            <img src={photo1} alt="image"></img>
          </Col>
          <Col lg={3} className="about-img">
            <img src={photo2} alt="image"></img>
          </Col>
          <Col lg={3} className="about-img">
            <img src={photo3} alt="image"></img>
          </Col>
          <Col lg={3} className="about-img">
            <img src={photo4} alt="image"></img>
          </Col>
        </Row>

        <Row>
          <Col size={12} className="prize-img" id="award">
            <img src={photo5} alt="image"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
