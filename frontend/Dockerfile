# Use an official node image as a base
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start"]

# Expose the port the app runs on
EXPOSE 3000
