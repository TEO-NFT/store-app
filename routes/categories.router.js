const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
  const category = req.body;
  res.json({
    msg: 'Created',
    category,
  });
});

router.patch('/update/:id', (req, res) => {
  const { id } = req.params;
  const category = req.body;
  res.json({
    msg: 'Update',
    category,
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
  const { id } = req.params;
  res.json({
    id,
    msg: 'Categories Work',
  });
});

module.exports = router;
