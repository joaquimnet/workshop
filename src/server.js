const express = require('express');
const path = require('path');

const middleware = require('./middleware/middleware');

const app = express();

app.use(middleware.logRequests);

app.use(express.static('./src/public'));

app.get('*', (req, res) => {
  res.send(`<h1>That's It</h1><p>Thank you for coming!</p>`);
});

app.listen(3000, () => console.log('Server running...'));
