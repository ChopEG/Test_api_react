const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

describe('API', () => {
  let agent;

  beforeAll(() => {
    agent = supertest.agent(app);
  });

  test('should return error response with status 404', async () => {
    const response = await agent.get(`/api`);
    const { statusCode } = response;

    expect(statusCode).toBe(404);
  });

  test('should return data with project', async () => {
    const limit = 1;
    const response = await agent.get(`/api/projects?limit=${limit}`);
    const { body, statusCode } = response;

    expect(statusCode).toBe(200);

    const dataType = 'Project';
    expect(body).toEqual(
      expect.objectContaining({
        type: dataType,
        data: expect.any(Array),
        query: expect.any(Object),
      }),
    );

    const { data } = body;
    expect(data.length).toBe(limit);

    const [project] = data;
    expect(project).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        budget: expect.any(Number),
        location: expect.any(Object),
        description: expect.any(String),
        contractors: expect.any(Array),
        image: expect.any(String),
        status: expect.any(String),
        progress: expect.any(Number),
      }),
    );
  });

  afterAll((done) => {
    mongoose.connection.close();
    mongoose.connection.on('disconnected', done);
  });
});
