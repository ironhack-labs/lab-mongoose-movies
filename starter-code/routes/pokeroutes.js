//this is the local hosts thing

const express = require('express');
const pokerouter  = express.Router();

/* GET home page */
pokerouter.get('/pokemon', (req, res, next) => {
  res.render('pokemon');
});

module.exports = pokerouter;
