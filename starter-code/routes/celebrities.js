const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');

/* GET celebrities page */
router.get('/', (req, res, next) => {

  Celebrity.find({})
    .then(celebs => {
      res.render('celebrities/index', {celebs: celebs})
    })
    .catch(err => { console.log('An error occurred: ', err); });

  
});

router.post('/', (req, res, next) => {
  let { name, occupation, catchPhrase } = req.body;
  Celebrity.create({name, occupation, catchPhrase})
    .then(() => {
      res.render('celebrities/new', {success: true})
    })
    .catch(err => {
      console.log('There was an error: ', err);
      res.render('celebrities/new');
    });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {

  Celebrity.findById(req.params.id)
    .then(celeb => {
      res.render('celebrities/show', celeb);
    })
    .catch(err => { console.log('An error occurred: ', err); });
});

router.post('/:id', (req, res, body) =>{
  let { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase})
    .then( () => {
      res.redirect('/celebrities');
    })
    .catch(err => { console.log('An error occurred: ', err); });
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then( celeb => {
      res.render('celebrities/edit', celeb)
    })
    .catch(err => { console.log('An error occurred: ', err); });
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => { console.log('An error occurred: ', err); });
});


module.exports = router;
