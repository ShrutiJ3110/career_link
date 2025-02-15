import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Internships by Places</h4>
          <ul className="footer-links">
            <li>Internship in India</li>
            <li>Internship in Delhi</li>
            <li>Internship in Mumbai</li>
            <li>View all internships</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Jobs by Stream</h4>
          <ul className="footer-links">
            <li>Marketing Jobs</li>
            <li>Sales Jobs</li>
            <li>Finance Jobs</li>
            <li>View all jobs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Placement Guarantee Courses</h4>
          <ul className="footer-links">
            <li>Full Stack Development</li>
            <li>Data Science</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 CareerLink - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
