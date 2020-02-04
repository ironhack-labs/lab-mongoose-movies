const express = require('express');
const celebrityRouter = express.Router();

const Celebrity = require('../models/Celebrity.model');

celebrityRouter.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
})

celebrityRouter.post('/celebrities', (req, res, next) => {
  // console.log(req.body);
  Celebrity.create(req.body)
    .then(newCeleb => {
      // console.log('saved book is: ', savedBook);
      res.redirect('/celebrities'); // --> redirect to the page that will show us the list of books
    })
    .catch(err => {
      console.log(`Error while saving celebrity in the DB: ${err}`);
      next(err);
    });
});

celebrityRouter.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, req.body)
  .then(celebritiesFromDB => {
    res.render('celebrities/show', {celebById: celebritiesFromDB})
  })
  .catch(err => {
    console.log(`Error while getting celebrities by ID from DB: ${err}`);
    next(err);
  });
})

celebrityRouter.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebsFromDB => {
    console.log(celebsFromDB)
  res.render('celebrities/index', {celebrities: celebsFromDB});
  })
  .catch(err => {
    console.log(`Error while getting celebrities from DB: ${err}`);
    next(err);
  });
});


module.exports = celebrityRouter;

