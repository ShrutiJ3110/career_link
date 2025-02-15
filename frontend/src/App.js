import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Courses from './components/Courses';
import NavbarComponent from './components/NavbarComponent';
// import CandidateSignup from './components/signup/CandidateSignup';
// import EmployerSignup from './components/signup/EmployerSignup';
// import LoginModal from './components/Login/LoginModal';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployerDashboard from './components/EmployerDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';

function App() {
  return (
    <Router>
      {/* <NavbarComponent /> */}
      <Routes>
        <Route path="/" element={<Home showFooter={true} />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/candidate-signup" element={<Signup />} />
        <Route path="/employer-signup" element={<Signup />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
