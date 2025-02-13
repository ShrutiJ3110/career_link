import React, { useState } from 'react';
import './style.css';

const LoginModal = () => {
  const [activeTab, setActiveTab] = useState('student');

  const showTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="login-modal">
      {/* Tab Buttons */}
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'student' ? 'active' : ''}`} 
          onClick={() => showTab('student')}
        >
          Student
        </button>
        <button 
          className={`tab ${activeTab === 'employer' ? 'active' : ''}`} 
          onClick={() => showTab('employer')}
        >
          Employer / T&P
        </button>
      </div>

      {/* Student Tab Content */}
      {activeTab === 'student' && (
        <div id="student" className="tab-content active">
          <button className="google-login">Login with Google</button>
          <div className="divider">OR</div>
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Must be at least 6 characters" className="input-field" />
          <a href="#" className="forgot-password">Forgot password?</a>
          <button className="login-btn">Login</button>
          <p className="register">
            New to CareerLink? Register <a href="candidate-signup.html">(Student)</a>
          </p>
        </div>
      )}

      {/* Employer Tab Content */}
      {activeTab === 'employer' && (
        <div id="employer" className="tab-content">
          <button className="google-login">Login with Google</button>
          <div className="divider">OR</div>
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Must be at least 6 characters" className="input-field" />
          <a href="#" className="forgot-password">Forgot password?</a>
          <button className="login-btn">Login</button>
          <p className="register">
            New to CareerLink? Register <a href="employer-signup.html">(Company)</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
