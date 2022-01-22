import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { Sidebar } from "../common/sidebar";

function ContentView({ path, subpath, menubar }) {

  const sidebar = menubar[path].sidebar == null ? [] : menubar[path].sidebar;

  return (
    <Row>
      <Sidebar table={sidebar} />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div>Content</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentView);
