import React from 'react';
import '../Login/style.css';

const CandidateSignup = () => {
  return (
    <div className="container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <button className="google-btn">Sign up with Google</button>
        <hr />
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="john@example.com" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Must be at least 6 characters" required />

          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="John" required />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder="Doe" required />

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p>
          Already registered? <a href="index.html">Login</a>
        </p>
      </div>
    </div>
  );
};

export default CandidateSignup;
