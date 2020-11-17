const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model');

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity
    .find()
    .then(celebrities => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(err => console.error('Error getting the celebrities', err));
});

/* GET new celebrity form page */
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

/* POST new celebrity */
router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
  .then(newCelebrity => {
    console.log('new celebrity created', newCelebrity);
    res.redirect('/celebrities'); 
  })
  .catch(err => {
    console.log('Error creating new celebrity', err);
    res.redirect('/celebrities/new');
  })
});

/* GET celebrities details page by ID */
router.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity
    .findById(id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(err => console.error('Error getting one celebrity by ID', err));
});

/* GET celebrities edit page by ID */
router.get('/celebrities/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Celebrity
    .findById(id)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(err => console.error('Error going to celebrity edit page', err));
});

/* POST update celebrity */
router.post('/celebrities/:id', (req, res, next) => {
  const id = req.params.id; 
  const { name, occupation, catchPhrase } = req.body;
  Celebrity
    .findByIdAndUpdate(id, {
      name,
      occupation,
      catchPhrase
    }, { new: true })
    .then(() => {
      res.redirect('/celebrities'); 
    })
    .catch(err => console.error('Error updating the celebrity', err));
});

/* POST delete celebrity */
router.post('/celebrities/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity
    .findByIdAndRemove(id)
    .then(() => {
      res.redirect('/celebrities'); 
    })
    .catch(err => console.error('Error deleting the celebrity', err));
});

module.exports = router;