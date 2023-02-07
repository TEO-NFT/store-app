const productList = require('./../database/products');
const express = require('express');
const router = express.Router();

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
  res.send(productList);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    msg: 'Work',
  });
});

module.exports = router;
