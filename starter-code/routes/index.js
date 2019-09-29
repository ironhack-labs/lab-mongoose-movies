const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(arrMovie => {
      res.render('movie/index', {arrMovie});
    })
    .catch(err => console.log(`error: ${err}`));
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovie => {
      res.render('movie/show', {theMovie});
    })
    .catch(error => {
      console.log('Error while retrieving celebrities details: ', error);
    });
});

// Iteration CELEBRITY
// const Celebrity = require('../models/celebrity');

// router.get('/', (req, res, next) => {
//   Celebrity.find()
//     .then(arrCelebrity => {
//       res.render('celebrities/index', {arrCelebrity});
//     })
//     .catch(err => console.log(`error: ${err}`));
// });

// router.get('/celebrity/:id', (req, res, next) => {
//   Celebrity.findById(req.params.id)
//     .then(theCelebrity => {
//       res.render('celebrities/show', {theCelebrity});
//     })
//     .catch(error => {
//       console.log('Error while retrieving celebrities details: ', error);
//     });
// });

module.exports = router;
