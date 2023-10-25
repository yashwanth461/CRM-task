import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Row>
        <Col md={6} className="left-column">
          <h2>
            All my friends have a cushy, high-paying job. Will I ever get a
            well-paying IT job?
          </h2>
          <p>
            FEELING HOPELESS THAT YOUR DOOR TO A LUCRATIVE IT JOB IS CLOSED?
            Never again worry about getting a well-paying IT job. This online
            training program is all you need to get hired by top software
            companies that you secretly desire to work for. And start earning an
            average of 4 lakh per annum—GUARANTEED!
          </p>
          <h2>FrontEnd Technologies</h2>
          <p>
            We provide different technologies in frontend terms. You can improve
            your frontend skillset if you want to become a UI/React Developer to
            build user-friendly applications. Learn from our courses and become
            a skilled person. We provide technologies like HTML, CSS,
            JavaScript, and more as mentioned below.
          </p>
          <h2>BackEnd Technologies</h2>
          <p>
            We provide different technologies in Backend terms. You can improve
            your Backend skillset if you want to become a Backend Developer to
            build productive applications.
          </p>
          <h2>FullStack Technologies</h2>
          <p>
            We provide different technologies in fullstack terms. You can
            improve your fullstack skillset if you want to become a Fullstack
            Developer to build complete and effective applications. Learn from
            our courses and become a skilled person. We provide technologies
            like HTML, CSS, JavaScript, SQL, Git.
          </p>
        </Col>
        <Col md={6} className="right-column">
          <img
            src="https://miro.medium.com/v2/resize:fit:800/0*ZEPJsASfB2z7hi_0"
            alt="aboutcontent"
            className="image-about"
          />
        </Col>
      </Row>
    </div>
  );
};

export default About;
