const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Database setup
const db = new sqlite3.Database('./new_problems_solutions.db', (err) => {
  if (err) {
    console.error('Database opening error: ', err);
  }
});

// Routes
app.post('/api/register', (req, res) => {
  // Registration logic
});

app.post('/api/login', (req, res) => {
  // Login logic
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
