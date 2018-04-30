const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose')

const Celeb = require('../../models/celebrities');

router.get('/celebrities', (req, res, next) => {
  Celeb.find()
    .then(celebs => {
      res.render("celebrities/index", { celebs });
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/celebrities/new', function (req, res) {
  res.render('celebrities/new')
})

router.get('/celebrities/:id', function (req, res) {
  const theId = req.params.id
  Celeb.findById({_id: theId})
    .then(celebs => { 
      res.render('celebrities/show', { celebs })
    })
    .catch(theError => { console.log(theError)})
  })

router.post('/celebrities/create', function (req, res) {
  const newCeleb = new Celeb({
    name: req.body.theName,
    occupation: req.body.theOccupation,
    catchPhrase: req.body.theCatchPhrase,
  })
  newCeleb.save()
    .then(celebs => { console.log(Celeb) })
    .catch(theError => { console.log(theError) })
    res.redirect('/celebrities')
})
  
router.post('/celebrities/:id/delete', function (req, res){
  Celeb.findByIdAndRemove(req.params.id)
    .then(celebs => { console.log(celeb) })
    .catch(theError => { console.log(theError) })
    res.redirect('/celebrities')
})

router.get('/celebrities/:id/edit', function (req, res) {
  Celeb.findById({_id: req.params.id})
  .then(celebs => { 
    res.render('celebrities/edit', {celebs: celebs} )})
})

router.post('/celebrities/update/:id', function(req, res){
  Celeb.findByIdAndUpdate(req.params.id, {
    name: req.body.theName,
    occupation: req.body.theOccupation,
    catchPhrase: req.body.theCatchPhrase,
  })
  .then(celebs => { console.log(celebs) })
  .catch(theError => { console.log(theError) })
  res.redirect('/celebrities')
  })





module.exports = router;