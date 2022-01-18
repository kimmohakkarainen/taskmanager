import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { Sidebar } from "../common/sidebar";

const sidebar_table = [
  { path: "/notif-1", title: "Notif-1", icon: "IconShoppingCart" },
  { path: "/notif-2", title: "Notif-2", icon: "IconChart" },
  { path: "/notif-3", title: "Notif-3", icon: "IconPile" },
  { path: "/notif-4", title: "Notif-4", icon: "IconEmptyDoc" },
  { path: "/notif-5", title: "Notif-5", icon: "IconFullDoc" },
  { path: "/notif-6", title: "Notif-6", icon: "IconEmployees" },
  { path: "/notif-7", title: "Notif-7", icon: "IconEmptyDoc" }
];

export function NotificationView() {
  return (
    <Row>
      <Sidebar table={sidebar_table} />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div>Notification</div>
      </div>
    </Row>
  );
}
