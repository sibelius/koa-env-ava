import test from 'ava';
import request from 'supertest-as-promised';
import app from '../app';

test('should return API_URL env on /api/url', async t => {
  const res = await request(app)
    .get('/api/url');

  t.is(res.status, 200);
});


