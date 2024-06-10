# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install sqlite3
RUN apt-get update && apt-get install -y sqlite3

# Copy the rest of the application code
COPY . .

# Initialize the SQLite database
COPY init_db.sql /usr/src/app/
RUN sqlite3 /usr/src/app/new_problems_solutions.db < /usr/src/app/init_db.sql

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["node", "server.js"]
