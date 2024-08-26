import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./header.css"; // Make sure to import the CSS file

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            Basic Crud
          </Navbar.Brand>
          {/* Add 'ms-auto' to move the nav items to the right */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="new-link">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/user" className="new-link">
              Add User
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
