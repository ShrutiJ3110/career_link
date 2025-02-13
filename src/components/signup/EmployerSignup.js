import React from 'react';
import '../Login/style.css';

const EmployerSignup = () => {
  const handlePostForFree = (event) => {
    event.preventDefault();
    const confirmAgreement = window.confirm(
      "By clicking 'Post for Free', you agree to our Terms & Conditions. Do you want to proceed?"
    );
    if (confirmAgreement) {
      alert("Thank you for signing up! Your details have been submitted.");
      // Implement form submission logic here if needed
    }
  };

  return (
    <div className="container">
      <div className="signup-form">
        <form id="signup-form" action="#" method="POST">
          {/* Official Email ID */}
          <label htmlFor="email">Official Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@company.com"
            required
            aria-label="Official Email ID"
          />

          {/* Password */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Minimum 6 characters"
            required
            aria-label="Password"
          />

          {/* First Name */}
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Your First Name"
            required
            aria-label="First Name"
          />

          {/* Last Name */}
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Your Last Name"
            required
            aria-label="Last Name"
          />

          {/* Mobile Number */}
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter mobile number"
            pattern="[0-9]{10}"
            required
            aria-label="Mobile Number"
          />

          {/* Submit Button */}
          <button
            type="button"
            className="signup-btn"
            onClick={handlePostForFree}
          >
            Post for Free
          </button>
        </form>
        <p>
          Already registered? <a href="index.html">Login</a>
        </p>
      </div>
    </div>
  );
};

export default EmployerSignup;
