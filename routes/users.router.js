const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
  const user = req.body;
  res.json({
    msg: 'Created',
    user,
  });
});

router.patch('/update/:id', (req, res) => {
  const { id } = req.params;
  const user = req.body;
  res.json({
    msg: 'Update',
    user,
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
    msg: 'Users Work',
  });
});

module.exports = router;
