const productRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const express = require('express');

function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerAPI;
