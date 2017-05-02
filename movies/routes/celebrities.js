
const express = require('express');

const celebrityModel = require('../models/celebrity.js');

const celebrityRoutes = express.Router();

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

celebrityRoutes.get('/celebrities/:id/', (req, res, next) => {
  const myCelebrityId = req.params.id;

celebrityModel.findById( myCelebrityId, (err, thatCelebrity) => {
  if (err) {
    next(err);
    return;
  }
    res.render('celebrities/show', {
    celebrity: thatCelebrity
    });
  });
});





module.exports = celebrityRoutes;
