import React from 'react';
import { Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your custom navbar styles

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar full-width-navbar" id="navbar">
      <Container fluid>
        {/* Brand Symbol on the Left */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsOGoHYnEMvvbFpNiBMB-YAtZwG42rcDDXg&s"
            alt="CareerLink"
            className="brand-logo"
            style={{ width: '40px', height: '40px' }}
          />
        </Navbar.Brand>

        {/* Navbar Toggler for Mobile View */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links and Search */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/jobs" className="nav-link">
              Jobs
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" className="nav-link">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/candidate-signup" className="nav-link">
              Candidate Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/employer-signup" className="nav-link">
              Employer Signup
            </Nav.Link>
          </Nav>

          {/* Search Box */}
          <Form className="d-flex ms-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 form-control"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
