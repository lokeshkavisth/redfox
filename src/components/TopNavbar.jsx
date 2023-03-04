import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export class TopNavbar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/">Redfox</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="text-white mx-2 text-decoration-none">
              Home
            </NavLink>
            <NavLink
              to="/About"
              className="text-white mx-2 text-decoration-none"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white mx-2 text-decoration-none"
            >
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default TopNavbar;
