const express = require('express');
const index = express.Router();

index.get('/', (req, res, next) => {
  res.render('../views/index.hbs');
});

const celebritiesRoute = require('../routes/celebrities')
index.use('/celebrities', celebritiesRoute)

module.exports = index;