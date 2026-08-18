# Open Source SCM, Execution, and File Sharing Platform Implementation Plan

This document outlines the proposed architecture, tech stack, and implementation details for a 100% free and open-source platform akin to a blend of GitHub and Replit. It supports massive file uploads, folder privacy toggles, remote code execution, dynamic database connections, and secure API key management.

## User Review Required

> [!WARNING]
> The plan now includes **Secret Management & Line-by-Line Security Scanning** to ensure users don't accidentally leak API keys. Please review these additions. Once everything looks good, click "Proceed" so we can start building!

## Proposed Architecture

### 1. Technology Stack (100% Free & Open Source)
*   **Frontend:** Next.js (React) with Tailwind CSS.
*   **Backend:** Node.js with Express.js.
*   **Core Database:** PostgreSQL (using Prisma ORM).
*   **Execution Engine:** Local Docker daemon (Dockerode) for free isolated container execution.
*   **File Storage:** Local File System (Zero cost, configurable to other OSS options like MinIO).

### 2. Core Features
*   **User Profile Management:** Single login, customizable profiles (Bio, Socials).
*   **Project & Folder System:** Hierarchical folder structure with privacy controls (Public, Private, Open Source).
*   **Remote Code Execution & History:**
    *   Execute code in secure Docker containers.
    *   Execution output is saved as a "commit" for the project's history.
*   **Dynamic Database Connections:** Securely link MongoDB, SQLite, etc. to projects.
*   **Secret Management & Security Scanning:**
    *   **Environment Variables UI:** Users can securely add API keys (like Google API keys) through a "Secrets" UI. These are encrypted in the database and injected into the execution container automatically, keeping them completely hidden from the codebase.
    *   **Line-by-Line Filtering:** Before any code is saved or uploaded, the backend will scan the text line-by-line using Regex patterns (Secret Scanning).
    *   **Leak Warning:** If an API key or sensitive token is detected in the code itself, the system will block the upload and display a warning to the user, advising them to move the key to the Secrets UI.

## Proposed Changes

### Setup

I will initialize the following structures:

#### [NEW] /frontend
Next.js application featuring a file explorer, code editor, terminal output, DB connection manager, and a **Secrets Manager UI**.

#### [NEW] /backend
Node.js application handling core APIs and the execution engine.

#### [NEW] /backend/services/security
A service dedicated to scanning incoming files and code line-by-line against known secret patterns (e.g., Google API keys, AWS tokens).

#### [NEW] docker-compose.yml
For setting up the PostgreSQL database and Redis (for task queuing).

## Verification Plan

### Automated Tests
- Test line-by-line secret scanner with mock Google API keys.
- Test encryption/decryption of the Secrets storage.

### Manual Verification
- Attempt to paste a raw Google API key into the editor and hit save; verify the warning modal appears.
- Add an API key safely via the Secrets UI.
- Run a script that prints the injected Secret from the environment variables to ensure it's securely passed to the Docker container.

- # Futuristic Changes Implementation Plan

This plan outlines the addition of "futuristic" features using free, open-source tools, distributed across 20 individual commits to meet your requirement. 

## User Review Required
> [!IMPORTANT]  
> I will be making 20 separate commits and pushing each one individually as requested. Please review the proposed features below and confirm if you'd like me to proceed with this plan.

## Proposed Changes

We will introduce the following "futuristic" elements using free libraries:

1.  **3D/WebGL Elements (Frontend):** We will add `three` and `@react-three/fiber` to create an interactive 3D background or elements in the UI, giving it a modern, futuristic feel.
2.  **AI Assistant Stub (Backend):** We will add an endpoint for an AI coding assistant, designed to connect to a free API (like Hugging Face Inference API) or local model, allowing users to generate code.
3.  **Modern UI Animations (Frontend):** We will use Framer Motion (free) to add smooth, futuristic page transitions and micro-interactions.
4.  **Glassmorphism Design System:** We will update the Tailwind config to include a glassmorphism theme, popular in futuristic web design.

### Execution Strategy (20 Commits)
To fulfill the requirement of 20 commits and pushes, I will break down the implementation into small, atomic steps:

*   **Commits 1-5:** Initializing the Git repository (if not fully set up) and setting up frontend dependencies (`three`, `@react-three/fiber`, `framer-motion`).
*   **Commits 6-10:** Building the 3D scene components and integrating them into the Next.js layout.
*   **Commits 11-15:** Setting up the Tailwind glassmorphism design tokens and applying them to existing pages.
*   **Commits 16-20:** Creating the backend AI service structure, API routes, and linking the frontend AI chat interface.

## Open Questions
*   Do you have a specific Git remote repository already set up where these 20 commits should be pushed? (If not, I can push to the currently configured remote origin).
*   Are there any specific "futuristic" features you had in mind other than 3D graphics and AI?

## Verification Plan
*   Verify the application runs with the new 3D and AI stubs without errors.

