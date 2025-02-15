import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 

function NavbarComponent() {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch role from localStorage (set during login)
    const role = localStorage.getItem('userRole');
    setUserRole(role);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userRole'); // Clear role from storage
    setUserRole(null);
    navigate('/login'); // Redirect to login page
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar full-width-navbar">
      <Container fluid>
        {/* Brand Symbol */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsOGoHYnEMvvbFpNiBMB-YAtZwG42rcDDXg&s"
            alt="CareerLink"
            className="brand-logo"
            style={{ width: '40px', height: '40px' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>

            {/* Show Different Navbar Based on Role */}
            {userRole === 'employee' ? (
              <>
                <Nav.Link as={Link} to="/my-applications">My Applications</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              </>
            ) : userRole === 'employer' ? (
              <>
                <Nav.Link as={Link} to="/post-job">Post a Job</Nav.Link>
                <Nav.Link as={Link} to="/manage-jobs">Manage Jobs</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/candidate-signup">Signup</Nav.Link>
                
              </>
            )}

            {/* Logout Button if Logged In */}
            {userRole && (
              <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer', color: 'red' }}>
                Logout
              </Nav.Link>
            )}
          </Nav>

          {/* Search Box */}
          <Form className="d-flex ms-3">
            <FormControl type="search" placeholder="Search" className="me-2 form-control" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
