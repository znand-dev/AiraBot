# Dockerfile
FROM node:22-slim

# App dir
WORKDIR /app

# Copy all file
COPY . .

# Install deps
RUN npm install --production

# Optional: buat path media
RUN mkdir -p /app/media

# Start script
CMD ["node", "index.js"]
