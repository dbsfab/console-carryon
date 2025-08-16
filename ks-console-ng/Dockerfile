# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage
FROM nginx:1.27-alpine
COPY ops/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ks-console-ng/browser /usr/share/nginx/html
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]