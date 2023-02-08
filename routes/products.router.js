const ProductsService = require('../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const getProductProductSchema  = require('./../schema/product.schema');
const express = require('express');

const router = express.Router();

const productsService = new ProductsService();

router.post('/create', async (req, res) => {
  const product = req.body;
  const productList = await productsService.create(product);
  res.json({
    msg: 'Created',
    productList,
  });
});

router.patch('/update/:id', async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  try {
    await productsService.update(id, product);
    res.json({
      msg: 'Update',
      product,
      id,
    });
  } catch (error) {
    res.json({
      msg: 'Error',
      error,
      id,
    });
  }
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await productsService.delete(id);
    res.json({
      msg: 'Deleted',
      id,
    });
  } catch (error) {
    res.json({
      msg: 'Error',
      id,
    });
  }
});

router.get('/', async (req, res) => {
  const products = await productsService.getAll();
  res.send(products);
});

router.get(
  '/:id',
  validatorHandler(getProductProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await productsService.findOne(id);

      res.json({
        id,
        product,
      });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
