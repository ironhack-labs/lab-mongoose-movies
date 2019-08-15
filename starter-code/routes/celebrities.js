const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/celebrities', (req, res, next) => {
  Celebrity
          .find()
          .then(allCelebrities => res.render('celebrities/celebrities',{allCelebrities}))
          .catch(err => console.log('Error while searching celebrities'))
});


router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new-celebrity');
});


router.post('/celebrities/create', (req, res, next) => {
  Celebrity
          .create(req.body)
          .then(newCelebrity => {console.log('Success')
            res.redirect('/celebrities')
          })
          .catch(err => {
            console.log('Error while creating new celebrity',err)
          });        
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity
          .findById(req.params.id)
          .then(celebrity => res.render('celebrities/celebrity-details',{celebrity}))
          .catch(err => console.log('Error while retrieving details',err))
  
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity
          .findByIdAndRemove(req.params.id)
          .then(res.redirect('/celebrities'))
          .catch(err => {
            console.log('Error while deleting celebrity',err)
          });          
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity
          .findById(req.params.id)
          .then(celebrity => res.render('celebrities/edit-celebrity',{celebrity}))
          .catch(err => console.log('Error while retrieving details',err))
  
});

router.post('/celebrities/:id', (req, res, next) => {
  Celebrity
          .findByIdAndUpdate(req.params.id,req.body)
          .then(res.redirect('/celebrities'))
          .catch(err => {
            console.log('Error while updating celebrity',err)
          });          
});

module.exports = router;