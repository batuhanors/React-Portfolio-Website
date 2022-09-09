import React from "react";

import bgImage from "../assets/color-sharp.png";
import "./Skills.css";

import htmlLogo from "../assets/skills/html.svg";
import cssLogo from "../assets/skills/css.svg";
import jsLogo from "../assets/skills/javascript.svg";
import bsLogo from "../assets/skills/bootstrap.svg";
import vueLogo from "../assets/skills/vue.svg";
import reactLogo from "../assets/skills/react.svg";
import nodeLogo from "../assets/skills/node.svg";
import mongoLogo from "../assets/skills/mongo.svg";
import gitLogo from "../assets/skills/git.svg";
import postmanLogo from "../assets/skills/postman.svg";
import redisLogo from "../assets/skills/redis.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Skills</h2>
              <p>
                I have a real passion for web development and software
                engineering, as I learned most of my knowledge myself and I
                constantly improve myself with the newest technologies. I am
                following recent trends in computer science and I am really
                eager to learn about something new.
              </p>

              <Container>
                <Row>
                  <Col lg={3} sm={6} xs={6} className="skill-card">
                    <img src={htmlLogo} alt="html" className="skill-img" />
                    HTML
                  </Col>
                  <Col lg={3} sm={6} xs={6} className="skill-card">
                    <img src={cssLogo} alt="html" className="skill-img" />
                    CSS
                  </Col>
                  <Col lg={3} sm={6} xs={6} className="skill-card">
                    <img src={jsLogo} alt="html" className="skill-img" />
                    JavaScript
                  </Col>
                  <Col lg={3} sm={6} xs={6} className="skill-card">
                    <img src={bsLogo} alt="html" className="skill-img" />
                    Bootstrap & jQuery
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} sm={6} xs={6} className="skill-card">
                    <img src={vueLogo} alt="html" className="skill-img" />
                    Vue JS
                  </Col>
                  <Col lg={3} sm={6} xs={6} className="skill-card">
                    <img src={reactLogo} alt="html" className="skill-img" />
                    React JS
                  </Col>
                  <Col lg={3} sm={6} xs={6} className="skill-card">
                    <img src={nodeLogo} alt="html" className="skill-img" />
                    NodeJS & Express
                  </Col>
                  <Col lg={3} sm={6} xs={6} className="skill-card">
                    <img src={mongoLogo} alt="html" className="skill-img" />
                    MongoDB
                  </Col>
                </Row>
                <Row>
                  <Col lg={4} xs={6} className="skill-card">
                    <img src={gitLogo} alt="html" className="skill-img odd" />
                    Git & GitHub
                  </Col>
                  <Col lg={4} xs={6} className="skill-card">
                    <img
                      src={postmanLogo}
                      alt="html"
                      className="skill-img odd"
                    />
                    Postman
                  </Col>
                  <Col lg={4} className="skill-card">
                    <img
                      src={redisLogo}
                      alt="html"
                      className="skill-img odd odd-mobile"
                    />
                    REDIS
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={bgImage} alt="Image" />
    </section>
  );
};

export default Skills;
