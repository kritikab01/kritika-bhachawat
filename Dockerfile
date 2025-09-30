# ---------- Stage 1: Build React App ----------
FROM node:lts-slim AS build

# Set working directory
WORKDIR /app

# Copy package files and install only production dependencies first
COPY package*.json ./

RUN npm install -g pnpm


RUN pnpm install

# Copy rest of the app source code
COPY . .

# Build optimized React app
RUN pnpm run build


# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:1.25-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy React build output to Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config for React SPA routing (production best practice)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for production
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
