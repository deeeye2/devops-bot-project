# Use an official node image as a base
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Install sqlite3
RUN apt-get update && apt-get install -y sqlite3

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Create the uploads directory
RUN mkdir -p /usr/src/app/uploads

# Initialize the database
COPY init_db.sql /usr/src/app/init_db.sql
RUN sqlite3 /usr/src/app/new_problems_solutions.db < /usr/src/app/init_db.sql

# Start the app
CMD ["node", "server.js"]

# Expose the port the app runs on
EXPOSE 5000
