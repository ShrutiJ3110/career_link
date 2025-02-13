import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Courses from './components/Courses';
import NavbarComponent from './components/NavbarComponent';
import CandidateSignup from './components/signup/CandidateSignup';
import EmployerSignup from './components/signup/EmployerSignup';
import LoginModal from './components/Login/LoginModal';
import './App.css';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home showFooter={true} />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/candidate-signup" element={<CandidateSignup />} />
        <Route path="/employer-signup" element={<EmployerSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
