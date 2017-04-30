const express = require('express');

const Celebrity = require('../models/celebrity-model.js');

const celebritiesRoutes = express.Router();

celebritiesRoutes.get('/celebrities', (req, res, next) => {
  Celebrity.find((err, celebritiesList) => {
    if(err){
      next(err);
      return;
    }
    res.render('celebrities/celebrities-list-view.ejs', {
    celebrities: celebritiesList
    });
  });
});

celebritiesRoutes.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, theCelebrity) => {
    if(err){
      next(err);
      return;
    }
    res.render('celebrities/celebrity-details-view.ejs', {
      celebrity: theCelebrity
    });
  });
});

module.exports = celebritiesRoutes;
