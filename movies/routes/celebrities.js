
const express = require('express');

const celebrityModel = require('../models/celebrity.js');

const celebrityRoutes = express.Router();

console.log('Hi');
celebrityRoutes.get('/celebrities', (req, res, next) => {
  celebrityModel.find((err, celebrityList) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/index.ejs', {
      celebrityRoutes: celebrityList
    });
  });
});


module.exports = celebrityRoutes;
