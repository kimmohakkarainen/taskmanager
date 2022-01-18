import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { Sidebar } from "../common/sidebar";

const sidebar_table = [
  { path: "/mgmt-1", title: "Mgmt-1", icon: "IconShoppingCart" },
  { path: "/mgmt-2", title: "Mgmt-2", icon: "IconChart" },
  { path: "/mgmt-3", title: "Mgmt-3", icon: "IconPile" },
  { path: "/mgmt-4", title: "Mgmt-4", icon: "IconEmptyDoc" },
  { path: "/mgmt-5", title: "Mgmt-5", icon: "IconFullDoc" },
  { path: "/mgmt-6", title: "Mgmt-6", icon: "IconEmployees" },
  { path: "/mgmt-7", title: "Mgmt-7", icon: "IconEmptyDoc" }
];

export function ManagementView() {
  return (
    <Row>
      <Sidebar table={sidebar_table} />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div>Management</div>
      </div>
    </Row>
  );
}
