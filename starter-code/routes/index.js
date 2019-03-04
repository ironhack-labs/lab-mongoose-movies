const express = require('express');
const Router  = express.Router();

/* GET home page */
Router.get('/', (req, res, next) => {
  res.render('index');
})

module.exports = Router;
