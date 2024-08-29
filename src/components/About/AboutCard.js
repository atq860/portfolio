import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            At <span className="purple">Aesthetic Technologies </span>
            {/* from <span className="purple"> Bhubaneswar, India.</span> */}
            <br />
            We specialize in developing custom technology strategies
            <br />
            that drive growth and innovation for business of all sizes.
            <br />
            <br />
            Are you interested?
            <br />
            <span className="purple">
              Schedule a free project scope with us
            </span>
            <br/>
            <br/>
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aesthetic Technologies</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
