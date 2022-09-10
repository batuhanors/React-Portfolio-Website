import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

import ScrollTop from "./components/ScrollTop";

function App() {
  useEffect(() => {
    document.title = "Batuhan Örs | Junior Full Stack Developer";
  });

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <About />

      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
