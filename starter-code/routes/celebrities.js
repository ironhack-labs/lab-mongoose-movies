const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find({})
  .then(celebrities => {
    res.render('celebrities/index',  {celebrities})
  })
  .catch(err => console.log(err))
});

// GET a specific celebrity
router.get('/celebrity/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  console.log(celebrityId);
  Celebrity.find({_id: celebrityId})
  .then(celebrity => {
    res.render('celebrities/celebrity', {celebrity})
  })
  .catch(err => console.log(err))
});


// GET new celebrity page
router.get('/new', (req, res, next) => {
  res.render('celebrities/newCelebrity');
});

// POST new Celebrity
router.post('/new', (req, res, next) => {
  Celebrity.create({...req.body})
  .then(celebrity => {
    console.log(celebrity);
    res.redirect('/celebrities');
  })
  .catch(err => console.log(err))
});


// GET edit celebrity page
router.get('/celebrity/:id/edit', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.find({_id: celebrityId})
  .then(celebrity => {
    res.render('celebrities/edit', {celebrity})
  })
  .catch(err => console.log(err))
});


// POST Edit Celebrity
router.post('/:id', (req, res, next) => {

  console.log(req.params.id);
  console.log(req.body)

  Celebrity.update({_id: req.params.id}, { $set: {name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }})
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })

  // console.log('hola');
});


// Delete Celebrity
router.get('/celebrity/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({_id: req.params.id})
  .then(() => res.redirect('/celebrities'))
  .catch(err => console.log(err))
});




module.exports = router;
