const express = require('express');
const Celebrity = require('../models/Celebrity');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(celebritiesFromDB => res.render('celebrities/index', { celebritiesFromDB }))
  .catch(error => console.log('Error found', error))
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => res.render('celebrities/show', { celebrity }))
  .catch(error => console.log("Couldn't find the celebrity page", error))
})

router.get('/addCelebrity', (req, res, next) => {
  res.render('celebrities/new')
});

router.post('/addCelebrity', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then(newCelebrity => {
    res.redirect('/celebrities')
    console.log(`${newCelebrity.name} inserted in database`)
  })
  .catch(error => {
    res.redirect('/addCelebrity')
    console.log('Error when adding new celebrity', error)
  })
})


module.exports = router;
