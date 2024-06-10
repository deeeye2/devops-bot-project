const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const jwtSecret = process.env.SECRET_KEY || 'secret';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Database setup
const db = new sqlite3.Database('./new_problems_solutions.db', (err) => {
  if (err) {
    console.error('Database opening error: ', err);
  } else {
    console.log('Database connected');
  }
});

// Helper function to send verification email
const sendVerificationEmail = (email, code) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Account Verification Code',
    text: `Your verification code is: ${code}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

// Register route
app.post('/api/register', (req, res) => {
  const { username, password, name, surname, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const code = crypto.randomBytes(3).toString('hex');
  db.run(
    `INSERT INTO users (username, password, name, surname, email) VALUES (?, ?, ?, ?, ?)`,
    [username, hashedPassword, name, surname, email],
    function(err) {
      if (err) {
        return res.status(500).send('Error during registration. Please try again.');
      }

      db.run(
        `INSERT INTO verification_codes (email, code) VALUES (?, ?)`,
        [email, code],
        function(err) {
          if (err) {
            return res.status(500).send('Error saving verification code. Please try again.');
          }

          sendVerificationEmail(email, code);
          res.send('Registration successful! Please check your email for verification code.');
        }
      );
    }
  );
});

// Verification route
app.post('/api/verify', (req, res) => {
  const { email, code } = req.body;

  db.get(
    `SELECT * FROM verification_codes WHERE email = ? AND code = ?`,
    [email, code],
    (err, row) => {
      if (err) {
        return res.status(500).send('Error verifying code. Please try again.');
      }

      if (row) {
        db.run(
          `UPDATE users SET verified = 1 WHERE email = ?`,
          [email],
          function(err) {
            if (err) {
              return res.status(500).send('Error updating user verification status. Please try again.');
            }

            res.send('Verification successful! You can now login.');
          }
        );
      } else {
        res.status(400).send('Invalid verification code. Please try again.');
      }
    }
  );
});

// Login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  db.get(
    `SELECT * FROM users WHERE email = ?`,
    [email],
    (err, user) => {
      if (err) {
        return res.status(500).send('Error during login. Please try again.');
      }

      if (user && bcrypt.compareSync(password, user.password) && user.verified) {
        const token = jwt.sign({ id: user.id }, jwtSecret, {
          expiresIn: 86400 // 24 hours
        });
        res.send({ auth: true, token });
      } else {
        res.status(400).send('Invalid email or password.');
      }
    }
  );
});

// CLI execution route
app.post('/api/cli', (req, res) => {
  const { command } = req.body;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).send(`Error: ${stderr}`);
    }
    res.status(200).send(stdout);
  });
});

// Problem submission route
app.post('/api/problem', (req, res) => {
  const { userId, problem } = req.body;
  const sql = 'INSERT INTO problems (user_id, problem) VALUES (?, ?)';

  db.run(sql, [userId, problem], function(err) {
    if (err) {
      return res.status(500).send('Error submitting problem.');
    }
    res.status(200).send('Problem submitted successfully.');
  });
});

// Fetch user profile route
app.get('/api/profile/:id', (req, res) => {
  const sql = 'SELECT * FROM users WHERE id = ?';

  db.get(sql, [req.params.id], (err, user) => {
    if (err || !user) {
      return res.status(404).send('User not found.');
    }
    res.status(200).send(user);
  });
});

// Create a default admin user if it doesn't exist
db.get(`SELECT * FROM users WHERE username = 'admin'`, (err, user) => {
  if (!user) {
    const hashedPassword = bcrypt.hashSync('admin', 8);
    db.run(
      `INSERT INTO users (username, password, name, surname, email, verified) VALUES ('admin', ?, 'Admin', 'User', 'admin@example.com', 1)`,
      [hashedPassword],
      (err) => {
        if (err) {
          console.error('Error creating admin user: ', err);
        } else {
          console.log('Admin user created.');
        }
      }
    );
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
