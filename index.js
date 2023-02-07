const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT);
