import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <Container fluid className="p-4">
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © {currentYear} Flowbite™ &nbsp;&nbsp;&nbsp;
              <Link to="/" className="text-dark">
                Home
              </Link>{" "}
              &nbsp;&nbsp;&nbsp;
              <a href="/signup" className="text-dark">
                Signup
              </a>{" "}
              &nbsp;&nbsp;&nbsp;
              <a href="/productlist" className="text-dark">
                Product List
              </a>{" "}
              &nbsp;&nbsp;&nbsp;
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
