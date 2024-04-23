# Use node 18-alpine as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 80 for the Next.js app
EXPOSE 5173

# Start the Next.js app
CMD ["npm", "run", "dev"]
