const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');

// GET route to display all celebs from the DB
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    
    .then(celebsFromDB => {
      console.log(`List of celebrities: ${celebsFromDB}`)
      res.render('./celebrities/index', { celebs : celebsFromDB })
    })
    .catch(err => console.log(`Error while getting celebrities from the DB: ${err}`));
});


module.exports = router;