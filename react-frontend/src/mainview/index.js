import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function Menubar() {
  return (
    <Navbar
      sticky="top"
      bg="dark"
      variant="dark"
      expand="md"
      className="shadow"
    >
      <Container fluid>
        <Navbar.Brand className="d-md-block col-md-3 col-lg-2">
          PL2
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Daily Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/mgmt">
              <Nav.Link>Managemement</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/stats">
              <Nav.Link>Statistics</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/notif">
              <Nav.Link>Notifications</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/work">
              <Nav.Link>Work</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
