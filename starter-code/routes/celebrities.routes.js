const express = require('express');
const celebrityRouter = express.Router();

const Celebrity = require('../models/Celebrity.model');

celebrityRouter.post('/celebrities/create', (req, res) => {
  // console.log(req.body);
  Celebrity.create(req.body)
    .then(savedCeleb => {
      console.log('Successfully saved: ', savedCeleb);

      // take us to the page that already exist in our app
      //      ^       ->  this is the URL so it HAS to start with '/'
      //      |      |
      //      |      |
      res.redirect('/celebrities');
    })
    .catch(err => console.log(`Error while saving author in the DB: ${err}`));
});

celebrityRouter.get('/celebrities/new', (req, res) => {
  Celebrity.find()
  .then(celebsFromDB => {
    // console.log(celebsFromDB)
  res.render('celebrities/celebrities', {celebrities: celebsFromDB});
  })
  .catch(err => console.log(`Error while getting celebrities from DB: ${err}`));
});

module.exports = celebrityRouter;

