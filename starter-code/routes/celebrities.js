const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');




router.get('/', (req, res, next) => {
    Celebrity.find()
    .then( celebrities => {
      res.render('celebrities/index', {celebrities});
    }
    )
    .catch(error => {
      console.log(error);
    })
    
  });
  
  router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.get('/:celebId', (req, res, next) => {
  Celebrity.find({
    '_id': req.params.celebId,
  }
  ).then(
    celebrity => {
        res.render('celebrities/show', {celebrity});
    }
  ).catch(error => {
    console.log(error);
  })
});



  module.exports = router;