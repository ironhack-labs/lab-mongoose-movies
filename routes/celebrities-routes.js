const express = require('express');

const Celebrity = require('../models/celebrity-model.js');

const celebrityRoutes = express.Router();

// Route 1 . List of celebrities
celebrityRoutes.get('/celebrities', (req, res, next) => {
  Celebrity.find( {}, (err, celebrityList) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/celebrities-list-view.ejs', {
      celebrities : celebrityList
    });
  });
});

//********************************************************
// Routes using req.query.id
//********************************************************
// celebrityRoutes.get('/show', (req, res, next) => {
//   const celebrityId = req.query.id;

//   Celebrity.findById(celebrityId, (err, theCelebrity) => {
//     if (err) {
//       next(err);
//       return;
//     }
//     res.render('celebrities/show.ejs', { 
//       celebrity : theCelebrity });
//   });
// });

//********************************************************
// Routes using object Id parameter
//********************************************************
// Route 2 . Celebrities detaild card
celebrityRoutes.get('/:id', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, theCelebrity) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/show.ejs', { 
      celebrity : theCelebrity });
  });
});

// Route 3 . Add new celebrity and post 
celebrityRoutes.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new-celebrity-view.ejs');
});

celebrityRoutes.post('/celebrities/new', (req, res, next) => {
  // create new celebrity
  const newCelebrity = new Celebrity({
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhrase: req.body.celebrityPhrase,
  });

  newCelebrity.save((err) => {
    if (err) {
      next(err);
      return;
    }
    // redirect instead of render!
    // this way, refreshing the page doesn't create duplicates.
    res.redirect('/celebrities');
  });    
});

// Route 3 . Update a celebrity and post 
celebrityRoutes.get('/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, theCelebrity) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/edit-celebrity-view.ejs', { 
      celebrity : theCelebrity });
  });
});

celebrityRoutes.post('/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  
  // Create a new object with all of the information from the edit page.
  const theCelebrityUpdate = {
      name: req.body.celebrityNameUpdate,
      occupation: req.body.celebrityOccupationUpdate,
      catchPhrase: req.body.celebrityPhraseUpdate,
  };

  Celebrity.findByIdAndUpdate(
    // argum 1 = id of document, argum 2 = changes from edit form, argum 3 callback
    celebrityId, theCelebrityUpdate, (err, theCelebrity) => {
    if (err) {
      next(err);
      return;
    }

    // redirect to the updated celebrity card
    res.redirect(`/${celebrityId}`);

    // this redirect to celebrity list
    // res.redirect('/celebrities');

  });
});

// Route 4 . Delete a celebrity and post 
celebrityRoutes.post('/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findByIdAndRemove(celebrityId, (err, theCelebrity) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/celebrities');
  });
});





module.exports = celebrityRoutes;