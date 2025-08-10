import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup.Jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ProductList from "./components/ProductList";
import NotFound from "./components/NotFound";

function App() {
  let username = "Logesh";
  return (
    <>
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href={`/login/${username}`}>Login</Nav.Link>
                <Nav.Link href={`/signup`}>Sign up</Nav.Link>
                <NavDropdown title="Product" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/productlist">
                    Shopping
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/waitravenna">
                    Something else
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login/:randomname" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/productlist" element={<ProductList />}></Route>

          {/* wrongurl redirct 404page */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
