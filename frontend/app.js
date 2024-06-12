const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

const apiBaseUrl = 'http://backend:5000'; // Use the service name 'backend'

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await fetch(`${apiBaseUrl}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Login successful:', data);
      res.json(data);
    } else {
      console.error('Login error:', data);
      res.status(response.status).json(data);
    }
  } catch (error) {
    console.error('Login request failed:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
