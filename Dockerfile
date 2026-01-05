# Dockerfile for Railway and other Docker-based platforms
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all project files
COPY . .

# Expose port
EXPOSE 3000

# Start the bot
CMD ["node", "index.js"]
