# Lab 1 - Manual demonstration of "life before CI/CD"

## Goal
- Experience the overhead, variability, and fragility of manual build/test workflows for JS Application.
- Understand the complete pipeline: Build → Test → Deploy
- Set the stage for why automation (CI/CD) adds value.

## Prerequisites
- Node.js and npm installed
- A GitHub account and access to this repository
- Railway CLI installed (`npm install -g @railway/cli`)
- Railway account created (free, no credit card required)

## Part 1: Prepare the workspace
- Fork the repository and navigate to the workspace

## Part 2: Manual CI/CD Pipeline for JS App

### Step 1: Install Dependencies
```bash
cd js-app
npm ci
```
**Observe:** Time taken, dependency resolution, potential network issues

### Step 2: Code Quality Check (Linting)
```bash
# Check for linting issues
npm run lint

# If there are issues, auto-fix them
npm run lint -- --fix

# Verify all issues are resolved
npm run lint
```
**Observe:** Code style violations, formatting issues, time to fix

### Step 3: Run Tests
```bash
npm test
```
**Observe:** Test execution time, test results, coverage reports

### Step 4: Build Application
```bash
npm run build
```
**Observe:** Build artifacts generated in `dist/` folder

### Step 5: Manual Deployment to Railway (Free)
```bash
# Login to Railway (first time only)
railway login

# Initialize Railway project in current directory (first time only)
railway init

# Deploy the application (non-blocking version)
railway up --detach

# Alternative: Deploy and follow logs
railway up --ci

# Generate a Railway domain for your service
railway domain

# Open the deployed app in browser
railway open
```