# JS App - CI/CD Training Demo

## Overview
A simple Node.js/Express calculator application designed for CI/CD training demonstrations. This app showcases the complete development lifecycle from local development to production deployment.

## Features
- **REST API** with calculator endpoints
- **Web Interface** for interactive testing
- **Automated Testing** with Jest
- **Code Quality** enforcement with ESLint
- **Production Build** process
- **Cloud Deployment** ready

## API Endpoints

### Health Check
```http
GET /ping
Response: {"message": "pong"}
```

### Calculator
```http
POST /calculate
Content-Type: application/json

{
  "op": "add|sub|mul|div",
  "a": number,
  "b": number
}

Response: {
  "op": "add",
  "a": 5,
  "b": 3,
  "result": 8
}
```

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Local Development
```bash
# Install dependencies
npm ci

# Run code quality checks
npm run lint

# Auto-fix linting issues
npm run lint -- --fix

# Run tests
npm test

# Build for production
npm run build

# Start development server
npm start
# Server runs on http://localhost:3000
```

### Environment Variables
```bash
PORT=3000          # Server port (default: 3000)
NODE_ENV=production # Environment mode
```

## Project Structure
```
js-app/
├── src/
│   └── index.js           # Main Express server
├── public/
│   └── index.html         # Web interface
├── test/
│   └── index.test.js      # Test suite
├── dist/                  # Build output (generated)
├── package.json           # Dependencies and scripts
├── railway.toml           # Railway deployment config
└── .eslintrc.json         # Code style rules
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the production server |
| `npm test` | Run test suite with Jest |
| `npm run lint` | Check code style with ESLint |
| `npm run lint -- --fix` | Auto-fix linting issues |
| `npm run build` | Build application for production |

## Testing
The app includes comprehensive tests covering:
- API endpoint functionality
- Error handling
- Input validation
- Calculator operations

Run tests with: `npm test`

## Code Quality
- **ESLint** enforces consistent code style
- **4-space indentation**
- **Single quotes** for strings
- **Semicolons** required
- **Unix line endings**

Check style: `npm run lint`
Auto-fix: `npm run lint -- --fix`

## Deployment

### Railway (Recommended - Free)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up --detach
railway domain
```

Railway automatically detects Node.js applications and handles the build process using Nixpacks.

## CI/CD Training Context

This application is part of a hands-on CI/CD training program:

1. **Manual Process (Lab 1)**: Students manually run all build, test, and deployment steps
2. **Automated Process (Lab 2)**: GitHub Actions automates the same steps

### Manual Pipeline Steps
1. `npm ci` - Install dependencies
2. `npm run lint` - Code quality check
3. `npm test` - Run tests
4. `npm run build` - Build application
5. `railway up --detach` - Deploy to production

### Automated Pipeline
- Triggered on every push to main branch
- Runs identical steps in GitHub Actions
- Deploys automatically if all checks pass
- Provides audit trail and rollback capability

## Troubleshooting

### Common Issues

**Tests failing?**
```bash
npm test -- --verbose
```

**Linting errors?**
```bash
npm run lint -- --fix
```

**Port already in use?**
```bash
PORT=4000 npm start
```

**Railway deployment hanging?**
```bash
railway up --detach  # Use detached mode
railway logs --tail  # Monitor progress
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Run `npm run lint` and `npm test`
5. Commit and push
6. Create a pull request

## License

This project is for educational purposes as part of CI/CD training.
