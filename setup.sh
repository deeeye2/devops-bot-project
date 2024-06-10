#!/bin/bash

# Update package list and install Node.js and npm
echo "Updating package list and installing Node.js..."
sudo apt-get update
sudo apt-get install -y nodejs npm sqlite3

# Verify installation
echo "Verifying Node.js and npm installation..."
node -v
npm -v

# Install npm packages
echo "Installing npm packages..."
npm install express body-parser sqlite3 nodemailer crypto multer path cors dotenv jsonwebtoken bcryptjs

# Set up environment variables
echo "Creating .env file..."
cat <<EOF > .env
PORT=5000
SECRET_KEY=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
EOF

# Initialize the SQLite database
echo "Setting up the SQLite database..."
cat <<EOF > init_db.sql
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    name TEXT,
    surname TEXT,
    email TEXT UNIQUE,
    verified INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS verification_codes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    code TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS problems (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    problem TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
);
EOF

# Run the SQLite script to create tables
echo "Running SQLite script to create tables..."
sqlite3 new_problems_solutions.db < init_db.sql

# Verify database setup
echo "Verifying database setup..."
sqlite3 new_problems_solutions.db .tables

echo "Setup complete!"
