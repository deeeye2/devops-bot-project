const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const apiBaseUrl = 'http://backend:5001'; // Use the service name 'backend'

// Example login function
async function login(username, password) {
  const response = await fetch(`${apiBaseUrl}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: username, password: password }),
  });

  const data = await response.json();
  if (response.ok) {
    // Handle successful login
    console.log('Login successful:', data);
  } else {
    // Handle login error
    console.error('Login error:', data);
  }
}

// Example usage
login('admin@example.com', 'admin').catch(console.error);

app.listen(port, () => {
  console.log(`Frontend server is running on port ${port}`);
});
