import { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./NavBar.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)

  return (
    <Navbar collapseOnSelect expand="lg" postion="fixed">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to ="/">Home</NavLink>
          </Nav>
          <Nav>
            <p style={{margin: "5px 0 0 5px"}}>{user ? `Welcome, ${user.name}` : null}</p>
            <  NavLink to="/login">Login</NavLink>
            <button 
              onClick={logOut}
              style={{marginLeft: "5px"}} 
              className="btn btn-outline-dark">Log Out
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
