import React, { useState } from 'react';
import './Home.css';
import { Card, Button } from 'react-bootstrap';
import { Sun, Moon } from 'lucide-react';
import Footer from './Footer';
import NavbarComponent from './NavbarComponent';

const Home = ({ showFooter }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div>
      <NavbarComponent />
    
    <div className={`home-page ${darkMode ? 'dark' : ''}`}>
      {/* Hero Section */}
      <div className="hero-section text-center">
        <h1>Unleash Your Career Potential</h1>
        <p>Learn, grow, and find the best opportunities tailored for you.</p>
        <Button variant="primary" className="mt-3 px-4">
          Join Now
        </Button>
      </div>

      {/* Dark/Light Mode Button */}
      <div className="mode-toggle">
        <Button variant="outline-secondary" onClick={toggleMode}>
          {darkMode ? <Sun size={16} /> : <Moon size={16} />} Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </Button>
      </div>

      {/* Trending Section */}
      <div className="trending-section mt-5">
        <h2 className="text-center mb-4">What's New on Our Platform 🚀</h2>
        <div className="card-container">
          <Card className="trending-card">
            <Card.Body>
              <Card.Title>Career Bootcamps</Card.Title>
              <Card.Text>Master top industry skills with hands-on bootcamps.</Card.Text>
              <Button variant="outline-success">Explore More</Button>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Body>
              <Card.Title>Exclusive Internships</Card.Title>
              <Card.Text>Gain practical experience with curated internships.</Card.Text>
              <Button variant="outline-success">Apply Now</Button>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Body>
              <Card.Title>Certification Pathways</Card.Title>
              <Card.Text>Earn credentials to showcase your expertise.</Card.Text>
              <Button variant="outline-success">Get Certified</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
    </div>
  );
};

export default Home;
