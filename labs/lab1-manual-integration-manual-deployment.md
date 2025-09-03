# Lab 1 - Manual demonstration of "life before CI/CD" (Session 1)

## Goal
- Experience the overhead, variability, and fragility of manual build/test workflows for JS Application.
- Understand the complete pipeline: Build → Test → Deploy
- Set the stage for why automation (CI/CD) adds value.

## Prerequisites
- Node.js and npm installed
- A GitHub account and access to this repository
- Railway CLI installed (`npm install -g @railway/cli`)
- Railway account created (free, no credit card required)

## Part 1: Prepare the workspace (5 minutes)
- Clone the repository and navigate to the workspace
- 

## Part 2: Manual CI/CD Pipeline for JS App (15–20 minutes)

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

### Pain Points to Document:
- How long did the entire process take?
- What happens if a test fails? How do you recover?
- What happens if linting fails? How many steps to fix?
- What if the deployment fails?
- How error-prone is this manual process?
- What if multiple developers need to deploy?


## Part 4: Linting Deep Dive Exercise (10 minutes)

### Intentionally Break Linting Rules
1. **Open `js-app/src/index.js`**
2. **Introduce linting violations:**
   ```javascript
   // Change single quotes to double quotes
   const message = "Hello World";
   
   // Remove semicolons
   const port = process.env.PORT || 3000
   
   // Add inconsistent indentation
        const result = 42;
   ```

3. **Experience the manual fix process:**
   ```bash
   # See the violations
   npm run lint
   
   # Try to fix manually (time this!)
   # Edit file to fix issues
   
   # Or use auto-fix
   npm run lint -- --fix
   
   # Verify fixes
   npm run lint
   ```

**Document the experience:**
- How long did manual fixes take vs auto-fix?
- How easy is it to miss violations?
- What happens when different developers have different code styles?

## Part 5: Reflection and Discussion (10 minutes)

### Questions for Discussion:
1. How many manual steps were required for each app?
2. What could go wrong at each step?
3. How would this scale with a team of 10 developers?
4. What happens when you need to deploy multiple times per day?
5. How do you ensure consistency across different environments?
6. How do you ensure consistent code style across the team?

### Pain Points Summary:
- **Time Consuming:** Each deployment takes 5-10 minutes of manual work
- **Error Prone:** Easy to miss steps or make mistakes
- **Inconsistent:** Different developers might follow different steps
- **Code Quality Issues:** Manual linting checks are often skipped
- **Not Scalable:** Doesn't work well with multiple environments or frequent deployments
- **No History:** No audit trail of what was deployed when
- **No Rollback:** Difficult to quickly revert problematic deployments

### Linting Specific Pain Points:
- **Manual Style Checks:** Developers might skip linting to save time
- **Inconsistent Code Style:** Each developer might have different preferences
- **Time Consuming:** Finding and fixing style issues manually takes time
- **Review Overhead:** Code reviews spend time on style instead of logic

## CLI Commands Reference

### Maven Commands (Java)
```bash
mvn clean                      # Clean previous builds
mvn compile                    # Compile source code
mvn test                       # Run tests
mvn package                    # Create JAR file
mvn clean package              # Clean and package in one command
```

## Next Session Preview
In the next session, we'll automate these exact same steps using GitHub Actions, showing how CI/CD eliminates these pain points while ensuring consistency and reliability. The automation will include automatic linting with failure on violations, ensuring code quality is never compromised.
