const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

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



module.exports = router;
