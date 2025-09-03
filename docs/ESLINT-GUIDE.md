# ESLint Guide - Following Lint Rules

## Quick Reference Commands

### Check for Lint Issues
```bash
# Check all files for linting issues
npm run lint

# Check specific file
npx eslint src/index.js

# Check specific directory
npx eslint src/
```

### Auto-Fix Lint Issues
```bash
# Auto-fix all fixable issues
npm run lint -- --fix

# Auto-fix specific file
npx eslint src/index.js --fix

# Auto-fix with detailed output
npm run lint -- --fix --format=detailed
```

### Development Workflow
```bash
# Check before committing
npm run lint

# Fix issues automatically
npm run lint -- --fix

# Check what will be fixed (dry run)
npm run lint -- --fix-dry-run
```

## Common Lint Rules and How to Follow Them

### 1. Indentation (indent)
**Rule**: Use 4 spaces for indentation
```javascript
// ❌ Wrong (8 spaces)
if (condition) {
        doSomething();
}

// ✅ Correct (4 spaces)
if (condition) {
    doSomething();
}
```

### 2. Quotes (quotes)
**Rule**: Use single quotes
```javascript
// ❌ Wrong
const message = "Hello World";

// ✅ Correct
const message = 'Hello World';
```

### 3. Semicolons (semi)
**Rule**: Always use semicolons
```javascript
// ❌ Wrong
const name = 'John'

// ✅ Correct
const name = 'John';
```

### 4. Line Endings (linebreak-style)
**Rule**: Use Unix line endings (LF)
- This is automatically handled by most editors
- Configure your editor to use LF line endings

## IDE/Editor Integration

### VS Code
1. Install ESLint extension
2. Add to settings.json:
```json
{
  "eslint.autoFixOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Other Editors
- **WebStorm**: Built-in ESLint support
- **Atom**: Install linter-eslint package

## Pre-commit Hooks (Recommended)

Add to package.json:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  }
}
```

## Troubleshooting

### Common Issues

1. **"npm run lint" command not found**
   ```bash
   # Solution: Add to package.json scripts
   "scripts": {
     "lint": "eslint ."
   }
   ```

2. **Global vs Local ESLint**
   ```bash
   # Use local project version (recommended)
   npm run lint
   
   # Or use npx for local packages
   npx eslint .
   ```

3. **Configuration conflicts**
   ```bash
   # Check which config is being used
   npx eslint --print-config src/index.js
   ```

### Ignore Files
Create `.eslintignore`:
```
node_modules/
dist/
build/
*.min.js
```

## Git Integration

### Check files before commit
```bash
# Check only staged files
npx eslint $(git diff --cached --name-only --diff-filter=ACM | grep '\.js$')

# Auto-fix staged files
npx eslint $(git diff --cached --name-only --diff-filter=ACM | grep '\.js$') --fix
```

## Best Practices

1. **Run lint checks frequently during development**
2. **Fix issues immediately rather than accumulating them**
3. **Use auto-fix for simple issues (indentation, quotes, semicolons)**
4. **Review complex issues manually**
5. **Configure your editor for real-time linting**
6. **Set up pre-commit hooks to prevent bad code from being committed**
