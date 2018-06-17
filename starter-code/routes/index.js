const express = require('express');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// -------------- CELEBRITIES -------------------
// Get /celebrities
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then( celebrities => {
      console.log( celebrities );
      res.render( 'celebrities', { celebrities: celebrities } );
    })
    .catch( err => { throw err } );
});

// Get /celebrities/:id
router.get('/celebrities/:celebrityId', (req, res, next) => {
  let celebrityId = req.params.celebrityId;
  Celebrity.findById( celebrityId )
    .then( celebrity => {
      console.log(celebrity);
      res.render( 'celebrity', celebrity );
    })
    .catch( err => { throw err } );
});

// Get /celebrity/add
router.get('/celebrity-add', (req, res, next) => {
  res.render( 'celebrity-add' );
});

// create new celebrity
router.post('/celebrity-add', (req, res, next) => {
  let { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase }, (err, celebrity) => {
    if (err) {
      console.log('An error happened:', err);
    } else {
      console.log('The new celebrity has been saved and he/she is: ', celebrity);
      res.redirect('/celebrities');
    } 
  })  
});

// create new celebrity
router.get('/celebrities/:celebrityId/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove( req.params.celebrityId )
    .then( () => {
      console.log("Celebrity deleted!!!");
      res.redirect('/celebrities');
    })
    .catch( err => { throw err } );
});

// edit celebrity 
router.get('/celebrities/:celebrityId/edit', (req, res, next) => {
  Celebrity.findById( req.params.celebrityId )
    .then( celebrity => {
      console.log("Going to edit this: ", celebrity );
      res.render( 'celebrity-edit', celebrity );
    })
    .catch( err => { throw err } );
});

// update celebrity
router.post('/celebrities/:celebrityId/update', (req, res, next) => {
  let { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate( req.params.celebrityId, { name, occupation, catchPhrase } )
    .then( celebrity => {
      console.log("Going to edit this: ", celebrity );
      res.redirect( `/celebrities/${celebrity._id}`);
    })
    .catch( err => { throw err } );
});


// -------------- MOVIES -------------------
// Get /movies
router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then( movies => {
      console.log( movies );
      res.render( 'movies', { movies: movies } );
    })
    .catch( err => { throw err } );
});

module.exports = router;
