# Use a Node.js base image
FROM node:22.11.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json from the backend folder
COPY backend/package*.json ./

# Install production dependencies
RUN npm install --production

# Copy the entire backend folder into the container
COPY backend ./

# Expose the port your backend server uses
EXPOSE 3000

# Start the application
CMD ["node", "src/app.js"]
