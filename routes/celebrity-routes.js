const express = require('express');
const Celebrity = require('../models/celebrity-model');
const celebrityRoute  = express.Router();

//list
celebrityRoute.get('/celebrities', (req, res, next) => {
    Celebrity.find( (err, celebrityList) => {
       if (err) {
         next(err);
         return;
       }

     res.render('celebrity/celebrity-list-view.ejs', {celebrity: celebrityList});
     });
});

// new celebrity
celebrityRoute.get('/celebrities/new', (req, res, next) => {
  res.render('celebrity/new-celebrity-view');
});

celebrityRoute.post('/celebrities', (req, res, next) => {

  const newCeleb = new Celebrity({
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchPhrase: req.body.celebcatchPhrase
  });

  newCeleb.save( (err) => {
    if (err) {
      res.render('celebrity/new-celebrity-view.ejs', {
        errors: newCeleb.errors
      });
      return;
    }

  res.redirect('/celebrities');
  });
});

//delete

celebrityRoute.post('/celebrities/delete/:id', (req, res, next) => {

  const celebId = req.params.id;

  Celebrity.remove( {_id: celebId}, (err) => {
    if (err) {
      next(err);
      return;
    }

  res.redirect('/celebrities');
  });
});

//edit
celebrityRoute.get('/celebrities/edit/:id', (req, res, next) => {

  const celebId = req.params.id;

  Celebrity.findById(celebId, (err, celeb) => {
    if (err) {
      next(err);
      return;
    }

  res.render('celebrity/edit-celebrity-view.ejs', {celebrity: celeb});
  });
});


celebrityRoute.post('/celebrities/edit/:id', (req, res, next) => {

  const celebId = req.params.id;

  const editedCeleb = {
    name: req.body.newName,
    occupation: req.body.newOccupation,
    catchPhrase: req.body.newcatchPhrase
  };

  Celebrity.findByIdAndUpdate(celebId, editedCeleb, (err, celeb) => {
    if (err) {
      next(err);
      return;
    }

  res.redirect(`/celebrities/${celebId}`);
  });
});

//details
celebrityRoute.get('/celebrities/:id', (req, res, next) => {

  const celebId = req.params.id;

  Celebrity.findById(celebId, (err, celeb) => {
    console.log(celeb);
    if (err) {
      next(err);
      return;
    }

    res.render('celebrity/celebrity-details-view.ejs', {celebrity: celeb});
  });
});


module.exports = celebrityRoute;
