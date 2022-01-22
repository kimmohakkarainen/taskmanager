import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";

import Menubar from "./mainview";
import DashboardView from "./dashboardview";
import ContentView from "./contentview";

function ContentViewParams() {
	const params = useParams();
	return (
	<ContentView path={params.path} subpath={params.subpath} />
	);
}

export default function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Container fluid>
        <Routes>
          <Route exact path="/" element={<DashboardView />} />
          <Route path="/content/:path" element={<ContentViewParams />} />
          <Route path="/content/:path/:subpath" element={<ContentViewParams />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
