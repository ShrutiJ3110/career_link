import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import NavbarComponent from './NavbarComponent';

function Login() {
  const [form, setForm] = useState({ email: '', password: '', role: 'employee' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');

      // Store token and role in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);

      // Redirect to respective dashboard
      navigate(data.role === 'employer' ? '/employer-dashboard' : '/employee-dashboard');

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div className="form-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <select name="role" onChange={handleChange} value={form.role} required>
            <option value="employee">Employee</option>
            <option value="employer">Employer</option>
          </select>
          <button type="submit">Login</button>
        </form>
        <p>If you are not registered, <a href="/candidate-signup">Sign up here</a></p>
      </div>
    </div>
  );
}

export default Login;
