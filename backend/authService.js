const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const jwtSecret = process.env.SECRET_KEY || 'secret';
const dbPath = process.env.DB_PATH || './new_problems_solutions.db';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database setup
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database opening error: ', err);
  } else {
    console.log('Database connected');
  }
});

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) {
      return res.status(500).send('Server error');
    }

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id }, jwtSecret, {
      expiresIn: 86400, // 24 hours
    });

    res.send({ auth: true, token });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
