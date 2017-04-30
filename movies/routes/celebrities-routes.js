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

celebritiesRoutes.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/celebrity-new-view.ejs');
});

celebritiesRoutes.post('/celebrities/new', (req, res, next) => {
  const theCelebrity = new Celebrity({
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhrase: req.body.celebrityCatchPhrase,
  });
  theCelebrity.save((err) => {
    if(err){
      res.render('products/celebrity-new-view.ejs', {
        errors: theCelebrity.errors
      });
      return;
    }

    res.redirect('/celebrities');
  });
});

celebritiesRoutes.post('/celebrities/:id/delete', (req, res, next) => {
  const theCelebrity = req.params.id;

  Celebrity.findByIdAndRemove(theCelebrity, (err, theCelebrity) => {
    if(err) {
      next(err);
      return;
    }
    res.redirect('/celebrities');
  });
});

celebritiesRoutes.get('/celebrities/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, theCelebrity) => {
    if(err) {
      next(err);
      return;
    }

  res.render('celebrities/celebrity-edit-view.ejs', {
      celebrity: theCelebrity
    });
  });
});

celebritiesRoutes.post('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;

  const celebrityChanges = {
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhrase: req.body.celebrityCatchPhrase
  };

  Celebrity.findByIdAndUpdate(
    celebrityId,
    celebrityChanges,
    (err, theCelebrity) => {
      if(err) {
        res.render('products/edit-product-view.ejs', {
          product:theProduct,
          validationErrors:theProduct.errors
        });
        return;
      }
      res.redirect('/celebrities');
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
