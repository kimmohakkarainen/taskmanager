import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { fetchMenu } from "../actions";

function Menubar({fetchMenu, menubar }) {

  useEffect(() => {
    fetchMenu();
  }, []);

	const values = Object.values(menubar);
	return (
		<Navbar variant="dark" bg="dark" expand="md" sticky="top" className="p-0 shadow">
  			<Container fluid>
    			<Navbar.Brand className="col-md-3 col-lg-2 px-3 me-0">TaskMgr</Navbar.Brand>
    			<Navbar.Toggle aria-controls="basic-navbar-nav" />
    			<Navbar.Collapse id="basic-navbar-nav">
      				<Nav className="me-auto">
      					<LinkContainer to="/"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
        				{values.map((item) => {
        				return (
        					<LinkContainer key={item.path} to={item.path}><Nav.Link>{item.title}</Nav.Link></LinkContainer>
        				);
        				})}
      				</Nav>
      				<Nav>
      					<LinkContainer to="/logout"><Nav.Link>Sign out</Nav.Link></LinkContainer>
      				</Nav>
    			</Navbar.Collapse>
  			</Container>
		</Navbar>
	);
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMenu: () => dispatch(fetchMenu())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);


