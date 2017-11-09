const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

//ITERATION 2
//With promise
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then((celebs) => {
      res.render('celebrities', {
        celebs : celebs
      });
    }).catch((err) =>{
      return next(err);
    });
});

//ITERATION 3
//With promise
router.get('/celebrities/:id', (req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id)
    .then((celeb) => {
      res.render('show', {
        celeb : celeb
      });
    }).catch((err) => {
      return next(err);
    });
});


//ITERATION 2
//Without promise
/*
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}, (err, celebs) => {
    if(err)return next(err);
    res.render('celebrities', {
      celebs: celebs
    });
  });
});
*/


module.exports = router;
