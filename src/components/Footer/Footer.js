import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../images/logo.png";
import { useHistory } from "react-router";
import "./Footer.css";

const Footer = () => {
  const path = useHistory();
  const handlePath = () => {
    path.push("/");
  };
  return (
    <footer>
      <Container>
        <Row className="g-4">
          <Col lg={6}>
            <img onClick={handlePath} className="w-50" src={Logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, ipsum.
            </p>
          </Col>
          <Col lg={2}>
            <h5>Products</h5>
            <ul>
              <li>MUI Core</li>
              <li>MUI X</li>
              <li>Templates</li>
              <li>Design Kits</li>
            </ul>
          </Col>
          <Col lg={2}>
            <h5>Resources</h5>
            <ul>
              <li>Material Icon</li>
              <li>React Bootstrap</li>
              <li>React Router</li>
              <li>Redux</li>
            </ul>
          </Col>
          <Col lg={2}>
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Vision</li>
              <li>Care</li>
              <li>Support</li>
              <li>Contact Us</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
