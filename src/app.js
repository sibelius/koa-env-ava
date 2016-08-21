'use strict';

import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import compose from 'koa-compose';
import { API_URL } from './config';

const app = new Koa();

const router = new Router({
  prefix: '/api',
});

router.get('/url', async ctx => {
  console.log('get url');
  ctx.body = API_URL;
});

app.use(logger());
app.use(compose([
  router.routes(),
  router.allowedMethods(),
]));
app.use(ctx => ctx.status = 404);

export default app;

