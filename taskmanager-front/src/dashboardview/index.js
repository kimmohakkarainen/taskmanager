import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { Sidebar } from "../common/sidebar";

const sidebar_table = [
  { path: "/employee", title: "Employee", icon: "IconEmployees" },
  { path: "/wellbeing", title: "Wellbeing", icon: "IconChart" },
  { path: "/absence", title: "Absence", icon: "IconShoppingCart" },
  { path: "/recruitment", title: "Recruitment", icon: "IconEmptyDoc" },
  { path: "/development", title: "Development", icon: "IconFullDoc" },
  { path: "/induction", title: "Induction", icon: "IconFullDoc" },
  { path: "/termination", title: "Termination", icon: "IconPile" }
];

function DashboardView({ menubar }) {

  return (
    <Row>
      <Sidebar table={sidebar_table} />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div>Dashboard</div>
      </div>
    </Row>
  );
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
