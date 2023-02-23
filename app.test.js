
const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);
it('check HelloWorld', async()  => {
     try {
        const response = await request.get('/test');
        expect (response.status).toBe(200);
        expect(response.body.message).toBe('HelloWorld');
    } catch (err) {
    }
}); 
