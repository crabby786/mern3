# Use an official Node.js image
FROM node:latest

# Set the working directory in the container
WORKDIR /app/client

# Copy package.json and package-lock.json to the container
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy the client application files to the container
COPY client/ .

# Set environment variable for client
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 5173

# Command to run your application during development
CMD ["npm", "run", "dev"]
