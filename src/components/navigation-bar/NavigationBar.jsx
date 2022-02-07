import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { NavigationContainer } from "./NavigationBar.styles";

const NavigationBar = () => {
  return (
    <NavigationContainer expand="lg" className="text-white" fixed="top">
      <Container>
        <Navbar.Brand href="/">ALUXION</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">metro</Nav.Link>
            <Nav.Link href="#link">cercanias</Nav.Link>
            <Nav.Link href="#link">carsharing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavigationContainer>
  );
};

export default NavigationBar;
