<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-success.svg" alt="Status">

  <img src="https://img.shields.io/badge/UI-Futuristic-ff69b4.svg" alt="UI">
  <h1>🌌 NEXUS: Decentralized Code & Execution Platform</h1>
  <p>A next-generation open-source alternative to GitHub & Replit featuring a futuristic 3D interface, built-in AI assistance, and secure remote execution.</p>
</div>

## 🚀 Overview

NEXUS is a 100% free and open-source platform designed for the modern developer. It combines Source Code Management (SCM), massive file sharing, and remote code execution into a single, beautifully designed environment. 

Featuring a state-of-the-art **Glassmorphism UI** layered over an interactive **3D WebGL particle universe**, the platform isn't just powerful—it's an experience.

## ✨ Key Features

### 🖥️ Futuristic Environment
*   **Immersive 3D Backgrounds:** Built with Three.js and React Three Fiber, the UI features dynamic, rotating meshes and a responsive particle system.
*   **Glassmorphism UI:** Sleek, translucent frosted-glass components utilizing Tailwind CSS v4.
*   **Fluid Animations:** Seamless page transitions and micro-interactions powered by Framer Motion.

### 🧠 Built-In AI Coding Assistant
*   **HuggingFace Integration:** Leverage cutting-edge models (like Qwen Coder) directly within the editor to generate code, explain complex functions, and debug errors.
*   **Floating Chat Interface:** A sleek, glass-styled chat window that's always ready to assist without interrupting your workflow.

### ⚙️ Core Platform Capabilities
*   **Isolated Code Execution:** Run your code securely in isolated Docker containers via the local Docker daemon. Execution outputs are saved seamlessly to your project's history.
*   **Project & Folder Privacy:** Fine-grained access controls. Make repositories completely public, totally private, or open-source.
*   **Dynamic Database Connections:** Easily link external databases (MongoDB, PostgreSQL, SQLite) directly to your hosted projects.

### 🛡️ Advanced Security
*   **Secret Management UI:** Stop hardcoding API keys. Add your Google API keys, AWS tokens, and other secrets to the UI, where they are encrypted and safely injected into your Docker execution environment at runtime.
*   **Real-time Secret Scanning:** The backend actively scans code line-by-line using Regex patterns before saving. If a leaked API key is detected, the upload is blocked immediately.

## 🛠️ Tech Stack

**Frontend:**
*   Next.js 15+ (App Router)
*   React 19
*   Tailwind CSS v4 (Glassmorphism design tokens)
*   Three.js & `@react-three/fiber` (3D WebGL)
*   Framer Motion (Animations)

**Backend:**
*   Node.js & Express.js
*   PostgreSQL (via Prisma ORM)
*   Dockerode (Local container execution engine)
*   HuggingFace Inference API (AI capabilities)

## 📦 Local Setup & Installation

### Prerequisites
*   Node.js (v20+)
*   Docker Desktop (Must be running for the execution engine)
*   PostgreSQL

### 1. Clone the repository
```bash
git clone https://github.com/its-rajkumarpadmanabhan/SCM-Source-code-management.git
cd SCM-Source-code-management
```

### 2. Set up the Backend
```bash
cd backend
npm install
# Set up your environment variables (Database URL, HuggingFace Token, etc.)
# Start the backend server
npm run start
```

### 3. Set up the Frontend
```bash
cd ../frontend
npm install
# Start the development server
npm run dev
```

The application will be running at `http://localhost:3000`.

## 🤝 Contributing

We welcome contributions from the community! Whether it's adding new 3D assets, improving the AI prompts, or optimizing the Docker execution engine, please feel free to fork the repository and submit a Pull Request.

## 📝 License

This project is open-source and available under the MIT License.
