import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

/*
			<input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />

*/


export function Menubar() {
	return (
		<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  			<a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
  			<button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    		<span class="navbar-toggler-icon"></span>
  			</button>
  			<input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
  			<div class="navbar-nav">
    			<div class="nav-item text-nowrap">
      				<a class="nav-link px-3" href="#">Sign out</a>
    			</div>
  			</div>
		</header>

	);
}

export function MenubarOLd() {
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
