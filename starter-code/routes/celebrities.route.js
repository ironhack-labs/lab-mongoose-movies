const express = require('express');
const celebrityRouter = express.Router();

const Celebrity = require('../models/Celebrity.model');

celebrityRouter.get('/celebrities', (req, res) => {
  Celebrity.find()
  .then(celebsFromDB => {
    // console.log(celebsFromDB)
  res.render('celebrities/index', {celebrities: celebsFromDB});
  })
  .catch(err => console.log(`Error while getting celebrities from DB: ${err}`));
});

module.exports = celebrityRouter;

