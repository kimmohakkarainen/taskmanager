import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";

import Menubar from "./mainview";
import DashboardView from "./dashboardview";

function DashboardViewParams() {
	const params = useParams();
	return (
	<DashboardView path={params.path} subpath={params.subpath} />
	);
}

export default function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Container fluid>
        <Routes>
          <Route exact path="/" element={<DashboardView />} />
          <Route path="/content/:path" element={<DashboardViewParams />} />
          <Route path="/content/:path/:subpath" element={<DashboardViewParams />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
