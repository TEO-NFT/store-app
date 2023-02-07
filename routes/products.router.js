const express = require('express');
const ProductsService = require('../services/product.service');
const router = express.Router();

const productsService = new ProductsService();

router.post('/create', (req, res) => {
  const product = req.body;
  res.json({
    msg: 'Created',
    product,
  });
});

router.patch('/update/:id', (req, res) => {
  const { id } = req.params;
  const product = req.body;
  res.json({
    msg: 'Update',
    product,
    id,
  });
});

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    msg: 'Delete',
    id,
  });
});

router.get('/', (req, res) => {
  res.send(productsService.getAll());
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = productsService.findOne(id);

  res.json({
    id,
    product,
  });
});

module.exports = router;
