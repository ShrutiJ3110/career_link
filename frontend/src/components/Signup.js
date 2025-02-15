import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import NavbarComponent from './NavbarComponent';

function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '', role: 'employee' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) return alert('Passwords do not match');
    
    const res = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
    if (res.ok) navigate('/login');
  };

  return (
    <div>
        <NavbarComponent />
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        <select name="role" onChange={handleChange} required>
          <option value="employee">Employee</option>
          <option value="employer">Employer</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
      <p>If you are  registered, <a href="/login">Login here</a></p>
    </div>
    </div>
  );
}

export default Signup;