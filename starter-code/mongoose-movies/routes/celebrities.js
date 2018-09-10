const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/celebrity')


router.get('/celebrity', (req, res, next) => {
  Celebrity.find()
  .then((celebInfo)=>{
    res.render('celebrities/listOfCelebs', {listOfCelebs: celebInfo})
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/newCeleb')
})



router.post('/celebrity/create', (req, res, next) => {
  Celebrity.create({
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchphrase: req.body.celebCatchphrase,
  })
  .then((response) => {
    res.redirect('/celebrity')
  })
  .catch((err) => {
    next(err);
  })
});

router.post('/celebrities/delete/:id', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then((response) => {
    res.redirect('/celebrity')
  })
  .catch((err) => {
    next(err)
  })
})

router.get('/celebrities/edit/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((theCeleb) => {
    res.render('celebrities/edit', {theCelebrity: theCeleb})
  })
  .catch((err) => {
    next(err)
  })
})

router.post('/celebrities/update/:id', (req, res, next ) => {
  Celebrity.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase
  })
  .then((response) => {
    res.redirect('/celebrities/' + req.params.id)
  })
  .catch((err) => {
    next(errs)
  })
})

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebInfo)=>{
    res.render('celebrities/celebDetails', {celebDetails: celebInfo})
  })
  .catch((err)=>{
    next(err);
  })
});

module.exports = router;