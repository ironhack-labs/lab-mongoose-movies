const express = require('express');

const Celebrity = require('../models/celebrity-model');

const celebrityRoute = express.Router();


celebrityRoute.get('/celebrities', (req, res, next) => {

  Celebrity.find( (err, celebrityList) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrity/celebrity-list-view.ejs', {celebrity: celebrityList});
  });
});




// New celebrity GET and POST starts here
// ---------------------------------------------------------
celebrityRoute.get('/celebrities/new', (req, res, next) => {
  res.render('celebrity/new-celebrity-view');
});

celebrityRoute.post('/celebrities', (req, res, next) => {

  const newCeleb = new Celebrity({
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchPhrase: req.body.celebPhrase
  });

  newCeleb.save( (err) => {
    if (err) {
      res.render('celebrity/new-celebrity-view', {
        errors: newCeleb.errors
      });
      return;
    }

    res.redirect('/celebrities');
  });

});
// ---------------------------------------------------------
// New celebrity GET and POST ends here




// Delete celebrity starts here
// ---------------------------------------------------------
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
// ---------------------------------------------------------
// Delete celebrity ends here




// Edit celebrity GET AND POST start here
// ---------------------------------------------------------
celebrityRoute.get('/celebrities/edit/:id', (req, res, next) => {

  const celebId = req.params.id;

  Celebrity.findById(celebId, (err, celeb) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrity/edit-celebrity-view', {celebrity: celeb});
  });

});


celebrityRoute.post('/celebrities/edit/:id', (req, res, next) => {

  const celebId = req.params.id;

  const editedCeleb = {
    name: req.body.newName,
    occupation: req.body.newOccupation,
    catchPhrase: req.body.newPhrase
  };

  Celebrity.findByIdAndUpdate(celebId, editedCeleb, (err, celeb) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect(`/celebrities/${celebId}`);
  });
});
// ---------------------------------------------------------
// Edit celebrity GET AND POST end here




// NEEDS TO GO AFTER ANY CELEBRITIES/BLAH... ROUTES
celebrityRoute.get('/celebrities/:id', (req, res, next) => {

  const celebId = req.params.id;

  Celebrity.findById(celebId, (err, celeb) => {
    console.log(celeb);
    if (err) {
      next(err);
      return;
    }

    res.render('celebrity/celebrity-details-view', {celebrity: celeb});
  });
});

module.exports = celebrityRoute;
