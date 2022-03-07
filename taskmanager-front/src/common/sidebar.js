import React from "react";
import ReactDOM from "react-dom";

import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  IconEmployees,
  IconShoppingCart,
  IconChart,
  IconEmptyDoc,
  IconFullDoc,
  IconPile
} from "./icons";

export function Sidebar({ table }) {
  return (
    <Nav
      bg="light"
      expand="md"
      className="d-none d-md-block col-md-3 col-lg-2 sidebar"
    >
      <div
        style={{
          position: "sticky",
          paddingTop: "1rem"
        }}
      >
        {table.map((row) => {
          return (
            <LinkContainer key={row.path} to={row.path}>
              <Nav.Link>
                {row.icon === "IconEmployees" && <IconEmployees />}
                {row.icon === "IconShoppingCart" && <IconShoppingCart />}
                {row.icon === "IconChart" && <IconChart />}
                {row.icon === "IconEmptyDoc" && <IconEmptyDoc />}
                {row.icon === "IconFullDoc" && <IconFullDoc />}
                {row.icon === "IconPile" && <IconPile />}
                {row.title}
              </Nav.Link>
            </LinkContainer>
          );
        })}
      </div>
    </Nav>
  );
}
