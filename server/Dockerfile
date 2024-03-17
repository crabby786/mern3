# Use an official Node.js image
FROM node:latest

# Set the working directory in the container
WORKDIR /app/server

# Copy package.json and package-lock.json to the container
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy the server application files to the container
COPY server/ .

# Set environment variable for server
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3001

# Command to run your application
CMD ["npm", "start"]
