const express = require('express');
const router = express.Router();
const Celebrities = require('../models/celebrity')
const mongoose = require('mongoose');
const bodyParser   = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/celebrities', (req, res, next) => {
  Celebrities.find()
    .then(celebritiesFound => {
      res.render('celebrities/index', {
        celebritiesFound
      })
    })
    .catch((err) => {
      console.log(err)
    })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post("/celebrities/new", (req, res, next) => {
  let newCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  Celebrities.create(newCelebrity)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch(()=>{
    res.redirect('/celebrities/new')
  })
})

router.get("/celebrities/:id/delete", (req, res, next) => {
  // res.json(req.params.id)
  Celebrities.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/celebrities')
    })
})

router.post("/celebrities/:id/edit", (req, res, next) => {
  let updatedCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  
  Celebrities.findByIdAndUpdate(req.params.id, updatedCelebrity)
  .then(() => {
    res.redirect(`/celebrities/${req.params.id}`)
  })
  .catch(error => next(error))
})

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrities.findByIdAndUpdate(req.params.id)
  .then(celebById => {
    res.render('celebrities/edit', celebById)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.get('/celebrities/:id', (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(celebrityById => {
      res.render('celebrities/show', celebrityById)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router;