import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typewriter from "typewriter-effect";

import HeaderImg from "../assets/header-img.svg";

import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              {"Hi! My name is Batuhan Örs"} <br></br>
              <span className="wrap">
                <Typewriter
                  options={{
                    loop: true,
                    wrapperClassName: "typewriter",
                    delay: 100,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Junior Full Stack Developer")
                      .pauseFor(3000)
                      .deleteAll()
                      .typeString(" Synthwave Music Producer")
                      .pauseFor(3000)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </h1>
            <p>
              I recently graduated from Atılım University Department of Computer
              Engineering. I began to self learn web development about 2 years
              ago and since then, I have developed multiple web applications
              both single and with a team. I have a passion about becoming a
              Full Stack Developer.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg}></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
