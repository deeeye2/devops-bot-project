import React, { useState } from 'react';
import Header from './Header'; // Correct import for Header
import './App.css'; // Correct import for App.css

const apiBaseUrl = 'http://backend:5001';

async function login(email, password) {
  const response = await fetch(`${apiBaseUrl}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Login failed');
  }
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      console.log('Login successful:', data);
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className="App">
      <Header />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
