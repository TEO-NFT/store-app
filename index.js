const routerAPI = require('./routes');

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

routerAPI(app);

app.listen(PORT);
