const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))

const Celebrity = require('../models/Celebrity.js')

router.get('/celebrities', (req, res) => {
  Celebrity.find({}, (err, Celebrity) => {
    if(err) res.send(err)
    else res.render('celebrities/index.hbs', {Celebrity})
  })
})

router.get('/celebrities/:id', (req, res) => {
  Celebrity.findById(req.params.id, (err, Celebrity) => {
    if(err) res.send(err)
    else res.render('celebrities/show.hbs', {Celebrity})
  })
})

router.get('/new', (req, res) => {
  res.render('celebrities/new.hbs')
})

router.post('/celebrities', (req, res) => {
  let newCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  Celebrity.create(newCelebrity, (err) => {
    if(err) res.status(500).send("Celebrity not added")
    else res.redirect('/celebrities')
  })
})

router.post('/celebrities/:id/delete', (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id, (err) => {
    if(err) res.status(500).send("Celebrity not removed")
    else res.redirect('/celebrities')
  })
})

router.get('/celebrities/:id/edit', (req, res) => {
  Celebrity.findById(req.params.id, (err, Celebrity) => {
    if (err) res.status(500).send("Could not edit celebrity")
    else res.render('celebrities/edit.hbs', Celebrity)
  })
})

router.post('/celebrities/:id', (req, res) => {
  let editCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  Celebrity.findByIdAndUpdate(req.params.id, editCelebrity, {upsert: true}, (err) => {
    if(err) res.status(500).send("Celebrity not edited")
    else res.redirect('/celebrities')
  })
})

module.exports = router;