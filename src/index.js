const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// API: perform a calculation
app.post('/calculate', (req, res) => {
    const { op, a, b } = req.body || {};
    const A = Number(a);
    const B = Number(b);
    if (isNaN(A) || isNaN(B)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    let result;
    switch (op) {
    case 'add': result = A + B; break;
    case 'sub': result = A - B; break;
    case 'mul': result = A * B; break;
    case 'div':
        if (B === 0) return res.status(400).json({ error: 'Divide by zero' });
        result = A / B; break;
    default: return res.status(400).json({ error: 'Unknown operation' });
    }
    res.json({ op, a: A, b: B, result });
});

// Simple ping
app.get('/ping', (req, res) => res.json({ message: 'pong' }));

// Serve frontend
app.use(express.static(path.join(__dirname, '..', 'public')));

// Run
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`JS app listening on port ${port}`);
});

// Export the app for testing
module.exports = app;