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
