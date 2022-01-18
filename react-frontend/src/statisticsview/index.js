import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { Sidebar } from "../common/sidebar";

const sidebar_table = [
  { path: "/stats-1", title: "Statistics-1", icon: "IconShoppingCart" },
  { path: "/stats-2", title: "Statistics-2", icon: "IconChart" },
  { path: "/stats-3", title: "Statistics-3", icon: "IconPile" },
  { path: "/stats-4", title: "Statistics-4", icon: "IconEmptyDoc" },
  { path: "/stats-5", title: "Statistics-5", icon: "IconFullDoc" },
  { path: "/stats-6", title: "Statistics-6", icon: "IconEmployees" },
  { path: "/stats-7", title: "Statistics-7", icon: "IconEmptyDoc" }
];

export function StatisticsView() {
  return (
    <Row>
      <Sidebar table={sidebar_table} />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div>Statistics</div>
      </div>
    </Row>
  );
}
