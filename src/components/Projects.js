import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgImage2 from "../assets/color-sharp2.png";

import project1 from "../assets/project1.PNG";
import project2 from "../assets/Project2.PNG";
import project3 from "../assets/project3.PNG";

import "./Projects.css";

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <h2>Portfolio Projects</h2>
        <p>
          I constantly try to learn new things, new technologies and in order to
          do that, I am continuously developing new web apps. Here you can find
          few of them.{" "}
          <span className="desktop"> You can hover images for more info</span>
          <span className="mobile"> You can tap the images for more info</span>
        </p>
        <Row>
          <Col lg={6}>
            <div className="proj-imgbx">
              <img src={project1} />
              <div className="proj-txtx">
                <h4>Blog Wizard</h4>
                <span>
                  BlogWizard is a basic FullStack blog website made with MEVN
                  Stack (MongoDB & Express JS & Vue JS & Node JS) and features
                  like JWT Authentication.
                </span>
                <span>
                  <a
                    href="https://blogwizard.herokuapp.com/"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here to see demo!
                  </a>
                </span>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="proj-imgbx">
              <img src={project2} />
              <div className="proj-txtx">
                <h4>Online Leaderboard</h4>
                <span>
                  A leaderboard application for a game that sorts according to
                  the money each player has earned and calculates their prizes.
                  Made wih MERN Stack
                </span>
                <span>
                  <a
                    href="https://batuhanors-leaderboard-project.netlify.app/"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here to see demo!
                  </a>
                </span>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={10} className="last-project">
            <div className="proj-imgbx">
              <img src={project3} />
              <div className="proj-txtx">
                <h4>Mutfakçım</h4>
                <span>
                  Mutfacim is a kitchen expense tracking app with a virtual
                  fridge feature. Also it generates available recipes for you
                  with the ingredients you have. It is my senior project and it
                  came second on Tübitak TEKNOFEST 2022.
                </span>
                <span>
                  <a
                    href="https://mutfakcim.netlify.app/"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here to see demo!
                  </a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={bgImage2} alt="Image" />
    </section>
  );
};

export default Projects;
