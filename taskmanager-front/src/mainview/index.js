import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


export function Menubar() {

	return (
		<Navbar variant="dark" bg="dark" expand="md" sticky="top" className="p-0 shadow">
  			<Container fluid>
    			<Navbar.Brand className="col-md-3 col-lg-2 px-3 me-0">TaskMgr</Navbar.Brand>
    			<Navbar.Toggle aria-controls="basic-navbar-nav" />
    			<Navbar.Collapse id="basic-navbar-nav">
      				<Nav className="me-auto">
      					<LinkContainer to="/"><Nav.Link>Eka</Nav.Link></LinkContainer>
        				<LinkContainer to="/toka"><Nav.Link>Toka</Nav.Link></LinkContainer>
        				<LinkContainer to="/kolmas"><Nav.Link>Kolmas</Nav.Link></LinkContainer>
      				</Nav>
      				<Nav>
      					<LinkContainer to="/logout"><Nav.Link>Sign out</Nav.Link></LinkContainer>
      				</Nav>
    			</Navbar.Collapse>
  			</Container>
		</Navbar>
	);
}
