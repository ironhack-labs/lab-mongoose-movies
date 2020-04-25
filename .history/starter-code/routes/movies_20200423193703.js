const express = require('express');
const router  = express.Router();

const Movie = require('../models/celebrity.js');



router.get('/celebrities/new', (req, res) => res.render('celebrities/new')); 

router.post('/celebrities/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;

  const newCeleb = new Celebrity({name, occupation, catchPhrase});
  
  newCeleb.save()
  .then(()=> {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    next(error);
  });

});