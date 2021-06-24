import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

import './Navigation.css'

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div className="Navigation">
      <Navbar expand="lg" >
      <Navbar.Brand as={NavLink} to="/">
        COFFEEGRAM
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/home" linkText="Home" />
          <NavbarItem path="/aboutus" linkText="About" />
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    
  );
}
