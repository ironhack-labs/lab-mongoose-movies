const express = require('express');
const celebrityRouter = express.Router();
const Celebrity = require('../models/Celebrity.model');


//GET - to dispay all celebrities 
// celebrityRouter.get('/celebrities', (req, res, next) => res.render('celebrities/index'));

// ***********************************************************************************
// GET all celebrities from the DB
// ***********************************************************************************


celebrityRouter.post('/celebrities', (req, res, next) => {
  Celebrity.create(req.body)
    .then(savedCelebrity => {
      res.redirect('/celebrities');
    })
    .catch(err => console.log(`Error while saving celebrity to DB: ${err}`));
});


celebrityRouter.get('/celebrities', (req, res, next) => {
  Celebrity.find() // <-- .find() method gives us always an ARRAY back
    .then(celebritiesFromDB => {
      console.log('Celebrities from DB: ========', celebritiesFromDB);
      res.render('celebrities/index', {
        celebrities: celebritiesFromDB
      });
    })
    .catch(err => console.log(`Error while getting celebrities from DB: ${err}`));
});


celebrityRouter.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new-celebrity');
});


celebrityRouter.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebritiesFromDB => {
      console.log('The received data from the API: ', celebritiesFromDB);
      res.render('celebrities/show', {
        celebrities: celebritiesFromDB
      });
    })
    .catch(err => console.log(`Error while getting celebrities from DB: ${err}`));
})





module.exports = celebrityRouter;