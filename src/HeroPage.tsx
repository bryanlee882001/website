import "./HeroPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

const HeroPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      {/* Dark Mode Button */}
      <div className="dark-mode-toggle-container">
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
        </div>
        <a
          href="https://csci-4611-spring-2024.github.io/assignment-1-lee03627/"
          rel="noopener noreferrer"
          className="dark-mode-toggle"
        >
          <i className="fas fa-gamepad icon"></i>
        </a>
      </div>

      {/* Title and Role */}
      <div className="title_container">
        <h1>Hi,I'm Bryan.</h1>
        <h2>
          Software Engineer
          {/* <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "Data Engineer",
              1000,
              "Solution Analyst",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          /> */}
        </h2>
      </div>

      {/* Links to resume, linkedin, and github */}
      <div className="links_container">
        {/* <a className="text_link" href="assets/Bryan_Resume.pdf" type="application/pdf">Resume</a> */}
        <a
          className="text_link"
          href="https://www.linkedin.com/in/bryanleeyensheng/"
        >
          LinkedIn
        </a>
        <a className="text_link" href="https://github.com/bryanlee882001">
          GitHub
        </a>
        <a className="text_link" href="mailto:bryanleeyensheng@gmail.com">
          Contact
        </a>
      </div>

      {/* Introduction */}
      <div className="description_container">
        <p>
          Based in San Francisco, CA, I currently work @{" "}
          <a className="text_link" href="https://www.meta.com">
            Meta
          </a>
          , where I build scalable systems supporting petabyte-scale data
          processing and experimentation platforms across GenAI products within
          Meta’s Ads platform.
        </p>

        <br />
        <br />

        <p>
          Previously, I worked at{" "}
          <a className="text_link" href="https://www.bfcsoftware.com/">
            BFC Software Inc
          </a>
          , where I worked on data infrastructure — building distributed data
          processing systems, workflow orchestration, and monitoring frameworks
          to ensure system reliability. I've also worked as a Software Engineer
          Intern @{" "}
          <a
            className="text_link"
            href="https://www.keysight.com/us/en/home.html"
          >
            Keysight Technologies
          </a>{" "}
          and as a Solutions Analyst Intern @{" "}
          <a className="text_link" href="https://www.genustechnologies.com/">
            Genus Technologies
          </a>
          , where I collaborated with interdisciplinary teams to develop and
          enhance software solutions that drive impactful business results.
        </p>

        <br />
        <br />

        <p>
          I've also contributed to research at the University of Minnesota,
          where I supported the{" "}
          <a
            className="text_link"
            href="https://en.wikipedia.org/wiki/Fast_Auroral_SnapshoT_Explorer"
          >
            NASA Fast Auroral SnapshoT Explorer (FAST)
          </a>{" "}
          satellite mission, building a platform for the Space Physics community
          to analyze orbit and spectral data — facilitating the study of space
          weather patterns and auroral electron precipitation.
        </p>
      </div>

      {/* Dark Mode Background */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default HeroPage;
