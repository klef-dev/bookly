import app from '../../app';
import request from 'supertest';

// group test using describe
describe('Book', () => {
  // it should search for books
  it('should search for books', async () => {
    const res = await request(app).get('/api/v1?query=quilting');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('items');
  });

  // it should fail to search with query missing
  it('should fail to search with query missing', async () => {
    const res = await request(app).get('/api/v1');
    expect(res.status).toBe(422);
    expect(res.body).toHaveProperty('errors');
  });

  // it should fail to search with query empty
  it('should fail to search with query empty', async () => {
    const res = await request(app).get('/api/v1?query=');
    expect(res.status).toBe(422);
    expect(res.body).toHaveProperty('errors');
  });

  // it should return empty items when search not found
  it('should return empty items when search not found', async () => {
    const res = await request(app).get('/api/v1?query=dwflsndjfkhsadbf');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('items');
    expect(res.body.items).toHaveLength(0);
  });

  // it should fail with wrong api key
  it('should fail with wrong api key', async () => {
    const res = await request(app).get('/api/v1?query=quilting&key=wrong');
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('message');
  });
});
