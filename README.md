# DRIP - Fashion Shop

A full-stack fashion e-commerce web application built with React and a Node.js/Express backend. The app is live and deployed on Vercel.

**Live Demo:** https://shopping-react-app-nine.vercel.app

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)

---

## Overview

DRIP is a modern fashion shopping application that provides users with a seamless browsing and purchasing experience. It features a React-powered frontend with smooth animations and a dedicated Express backend that handles authentication and data via a GraphQL API.

---

## Tech Stack

### Frontend
- **React 18** - UI library
- **React Router DOM v6** - Client-side routing
- **Framer Motion** - Animations and transitions
- **Vite** - Build tool and development server

### Backend
- **Node.js / Express 5** - REST/API server
- **GraphQL + graphql-request** - Data querying layer
- **JSON Web Tokens (jsonwebtoken)** - Authentication
- **bcryptjs** - Password hashing

### Tooling
- **Vite** - Frontend bundler
- **concurrently** - Runs frontend and backend servers simultaneously in development
- **Vercel** - Deployment and hosting

---

## Project Structure

```
shopping_react-app/
├── backend/              # Express server (authentication, GraphQL, API routes)
├── public/               # Static assets
├── src/                  # React application source code
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── vercel.json           # Vercel deployment configuration
└── package.json
```

---

## Features

- Fashion product browsing and discovery
- User authentication with JWT and hashed passwords
- GraphQL-based data fetching
- Smooth page transitions and UI animations powered by Framer Motion
- Client-side routing for a single-page application experience
- Full-stack architecture with a dedicated Node.js backend
- Deployed and accessible via a public Vercel URL

---

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/annanyaa03/shopping_react-app.git
   cd shopping_react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

**Frontend only (development):**
```bash
npm run dev
```

**Frontend + Backend together:**
```bash
npm run dev:full
```

This runs the Vite dev server and the Express backend concurrently.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the Vite frontend development server |
| `npm run dev:full` | Starts both the frontend and backend servers concurrently |
| `npm run build` | Builds the frontend for production |
| `npm run preview` | Previews the production build locally |

---

## Deployment

The application is deployed on **Vercel**. The `vercel.json` file in the root of the repository contains the deployment configuration for routing and build settings.

To deploy your own instance, install the Vercel CLI and run:

```bash
npx vercel
```

---

## Dependencies

### Production
| Package | Purpose |
|---|---|
| `react` / `react-dom` | Core UI framework |
| `react-router-dom` | Client-side routing |
| `framer-motion` | Animation library |
| `express` | Backend server framework |
| `graphql` / `graphql-request` | GraphQL schema and client |
| `jsonwebtoken` | JWT-based authentication |
| `bcryptjs` | Password hashing |
| `cors` | Cross-origin resource sharing |
| `concurrently` | Parallel script runner |

### Development
| Package | Purpose |
|---|---|
| `vite` | Build tool and dev server |
| `@vitejs/plugin-react` | React support for Vite |
| `@types/react` / `@types/react-dom` | TypeScript type definitions |

---

## Author

[annanyaa03](https://github.com/annanyaa03)
