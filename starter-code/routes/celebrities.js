const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/Celebrity');

// GET /celebrities
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then( (allCelebritiesFromDB) => { 
      //console.log(allCelebritiesFromDB)
      res.render('celebrities/index', { allCelebritiesFromDB }); 
  })
  .catch( (err) => console.log(err));
});

// GET /celebrities/id
router.get('/:id', (req, res, next) => {
  const { celebrityId } = req.params;

  Celebrity.findOne(celebrityId)
    .then( (celebrityDetails) => {
      res.render('celebrities/show', { celebrityDetails });
    })
    .catch( (err) => console.log(err));
});


module.exports = router;