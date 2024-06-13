FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Build the application
COPY . .
RUN npm run build

# Expose port
EXPOSE 3000

# Use a Node.js web server to serve the frontend (could also use nginx)
RUN npm install -g serve
CMD ["serve", "-s", "build"]
