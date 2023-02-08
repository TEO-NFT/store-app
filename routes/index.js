const productRouter = require('./products.router');
const express = require('express');

function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
}

module.exports = routerAPI;
