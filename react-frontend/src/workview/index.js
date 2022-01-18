import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { Sidebar } from "../common/sidebar";

const sidebar_table = [
  { path: "/work-1", title: "Work-1", icon: "IconShoppingCart" },
  { path: "/work-2", title: "Work-2", icon: "IconChart" },
  { path: "/work-3", title: "Work-3", icon: "IconPile" },
  { path: "/work-4", title: "Work-4", icon: "IconEmptyDoc" },
  { path: "/work-5", title: "Work-5", icon: "IconFullDoc" },
  { path: "/work-6", title: "Work-6", icon: "IconEmployees" },
  { path: "/work-7", title: "Work-7", icon: "IconEmptyDoc" }
];

export function WorkView() {
  return (
    <Row>
      <Sidebar table={sidebar_table} />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div>Work</div>
      </div>
    </Row>
  );
}
