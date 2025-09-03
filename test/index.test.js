const request = require('supertest');
const app = require('../src/index');

describe('JS App API', () => {
    it('GET /ping returns pong', async () => {
        const res = await request(app).get('/ping');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'pong' });
    });

    it('POST /calculate adds numbers', async () => {
        const res = await request(app)
            .post('/calculate')
            .send({ op: 'add', a: 2, b: 3 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('result', 5);
    });
});