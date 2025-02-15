import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import NavbarComponent from './NavbarComponent';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      data.role === 'employer' ? navigate('/employer-dashboard') : navigate('/employee-dashboard');
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
        <NavbarComponent />
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <select name="role" onChange={handleChange} required>
          <option value="employee">Employee</option>
          <option value="employer">Employer</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;