import React, { Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginLeft: "0.5rem",
};
const authenticatedOptions = (
  <>
    <Nav.Item>
      <Link to="about" style={linkStyle}>
        About
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="tasks-index" style={linkStyle}>
        Tasks
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="change-password" style={linkStyle}>
        Change Password
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="profile" style={linkStyle}>
        My Profile
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="sign-out" style={linkStyle}>
        LogOut
      </Link>
    </Nav.Item>
  </>
);

const unauthenticatedOptions = (
  <>
    <Nav.Item>
      <Link to="about" style={linkStyle}>
        About
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="tasks-index" style={linkStyle}>
        Tasks
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="sign-in" style={linkStyle}>
        Login
      </Link>
    </Nav.Item>
  </>
);

const alwaysOptions = (
  <>
    <Nav.Link>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
    </Nav.Link>
  </>
);

const UserHeader = ({ user, token }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand className="mr-4">
      <Link to="/" style={linkStyle}>
        ZENTASKER
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
          <span className="navbar-text mr-2">Welcome, {user.email}</span>
        {alwaysOptions}
        {authenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default UserHeader;
