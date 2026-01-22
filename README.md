# Dockerize Node.js + TypeScript Project (Documentation)

**Prepared by:** Jenil Gajera
**Role:** Full Stack / DevOps / Cloud

## Overview

This documentation explains how to Dockerize a Node.js + TypeScript application using a multi-stage Docker build. The objective is to produce a lightweight production image and enable consistent DevOps workflows.

> **Use Case**: Deploying TypeScript-based Node services in containerized environments (Local, CI/CD, Cloud, K8s).

---

## Prerequisites

* Node.js (Local development)
* Docker Desktop / Docker Engine installed
* Basic understanding of Node.js + TypeScript project structure

Typical project structure:

```
/node-ts-docker-devops
 ├── src/
 ├── dist/
 ├── package.json
 ├── tsconfig.json
 ├── Dockerfile
 └── .dockerignore
```

---

## Step 1 — Create Dockerfile

At the project root, create a `Dockerfile` (no extension).

### **Dockerfile (Multi-Stage Build)**

```dockerfile
# Step 1: Build stage
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Step 2: Production stage
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
RUN npm ci --only=production
EXPOSE 3000
CMD ["node", "dist/app.js"]
```

### **Why Multi-Stage? **

* Smaller production image
* No dev dependencies inside final image
* Faster deployments & smaller attack surface

---

## Step 2 — Create `.dockerignore`

Prevents unnecessary files from being copied into the image.

```
node_modules
dist
.git
.github
.vscode
npm-debug.log
.env
```

---

## Step 3 — Build Docker Image

Run:

```
docker build -t node-ts-devops:latest .
```

### After build, verify:

```
docker images
```

> **Expected Result:** `node-ts-devops` with `latest` tag should appear.

---

## Step 4 — Run Container (Local Testing)

Run application in container:

```
docker run -d -p 3000:3000 --name my-node-app node-ts-devops:latest
```

### Useful Commands

Check running containers:

```
docker ps
```

Logs:

```
docker logs my-node-app
```

Stop & Remove:

```
docker stop my-node-app && docker rm my-node-app
```

---

## Step 5 — GitHub Integration

Push Docker config with:

```
git add Dockerfile .dockerignore
git commit -m "Add Dockerfile for Node + TS Dockerization"
git push origin main
```

---

## Deployment Notes (Presentation Points)

* Works with Kubernetes / Docker Swarm / ECS
* Supports CI pipelines (GitHub Actions, GitLab CI, Jenkins)
* Container image becomes consistent runtime

---

## Architecture Diagram (High-Level)

```
 Developer → Dockerfile → Docker Build → Docker Image → Container → Browser/API Client
```

---

## Client Explanation Summary

> "We containerized the Node + TypeScript application using a multi‑stage Docker build. The production image contains only compiled code and production dependencies, resulting in a smaller, more secure and deployment‑friendly artifact. The container exposes port 3000 and runs consistently across environments including local, CI/CD, and cloud platforms."

---

## Files Delivered

✔ Dockerfile
✔ .dockerignore
✔ Container Deployment Procedure
✔ Ready for PDF / DOCX / MD Export
