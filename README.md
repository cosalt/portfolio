# Portfolio Repository

## Overview
This repository contains the source code for my personal portfolio website. It is built using **Astro**, **TypeScript**, and **Docker** to create a fast and responsive site showcasing my GitHub projects and personal achievements.

---

## Table of Contents

1. [Features](#1-features)  
2. [Technologies Used](#2-technologies-used)  
3. [Setup and Installation](#3-setup-and-installation)  
4. [Docker Setup](#4-docker-setup)  
5. [Folder Structure](#5-folder-structure)  
6. [Contributing](#6-contributing)  

---

## 1. Features

- **Dynamic Content**: Automatically fetches and displays GitHub repositories.  
- **Responsive Design**: Optimized for all devices.  
- **SEO Optimized**: Built-in support for meta tags and search engine optimization.  
- **Fast Loading**: Lightweight build with Astro and TypeScript.  
- **Containerized Deployment**: Easy to deploy using Docker.  

---

## 2. Technologies Used

- **Astro**: Framework for building static websites.  
- **TypeScript**: For type-safe JavaScript.  
- **Docker**: For containerized deployment.  
- **GitHub API**: Fetches data about repositories and contributions.  

---

## 3. Setup and Installation

### Prerequisites
- **Node.js**: Ensure you have Node.js installed.  
- **Docker**: Required for containerization (optional for local development).  

### Steps
1. Clone the repository:  
   ```
   git clone <repository-url>
   cd portfolio
   ```
2. Install dependencies:  
   ```
   npm install
   ```
3. Start the development server:  
   ```
   npm run dev
   ```
4. Open the website in your browser:  
   ```
   http://localhost:3000
   ```

---

## 4. Docker Setup

### Build and Run
1. Build the Docker image:  
   ```
   docker build -t portfolio .
   ```
2. Run the container:  
   ```
   docker run -d -p 3000:3000 portfolio
   ```
3. Access the site:  
   ```
   http://localhost:3000
   ```

### Dockerfile Example
```
# Use official Node.js image as the base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]
```

---

## 5. Folder Structure

```
portfolio/
├── public/          # Static assets (images, favicon, etc.)
├── src/
│   ├── components/  # Reusable UI components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Website pages
│   ├── styles/      # CSS/SCSS files
│   └── utils/       # Utility functions (e.g., GitHub API integration)
├── package.json     # Project metadata and dependencies
├── tsconfig.json    # TypeScript configuration
├── astro.config.mjs # Astro configuration
└── Dockerfile       # Docker configuration
```

---

## 6. Contributing

Contributions are welcome! To contribute:  
1. Fork the repository.  
2. Create a branch for your changes:  
   ```
   git checkout -b feature-branch
   ```
3. Push your changes:  
   ```
   git push origin feature-branch
   ```
4. Submit a pull request with a detailed description.

---
