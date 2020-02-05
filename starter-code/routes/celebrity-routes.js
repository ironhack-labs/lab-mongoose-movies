const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.model');

celebrityRouter.get('/celebrity-input', (req, res) => res.render('celebrity-views/celebrity-form'));

celebrityRouter.post('/celebrities', (req, res) => {
    celebrity.create(req.body)
    .then(savedCelebrity => {
        res.redirect('/celebrities');
    })
    .catch(err => console.log(`Error while saving celebrity in the DB: ${err}`));
});

celebrityRouter.get('/celebrities', (req, res) => {
    Celebrity.find() // <-- .find() method gives us always an ARRAY back
      .then(celebritiesFromDB => {
        // console.log('celebrities from DB: ========', celebritiesFromDB);
        res.render('celebrities-views/celebrities-list', { celebrities: celebritiesFromDB });
      })
      .catch(err => console.log(`Error while getting celebrities from DB: ${err}`));
  });
  
  module.exports = celebrityRouter;
  