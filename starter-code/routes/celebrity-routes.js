const express = require('express');
const router = express.Router();
const Celeb = require('../models/celebrity');



router.get('/', (req, res, next) => {
  Celeb.find()
  .then((allCelebs) => {
    res.render('celebrities/allCelebs', {allCelebs: allCelebs});
  })
  .catch((err) =>{
    next(err);
  })
})



router.get('/new', (req, res, next) => {
  res.render('celebrities/newCeleb')
})



router.post('/new', (req, res, next) => {
  let celebrity = {
    name: req.body.theName,
    occupation: req.body.theOccupation,
    catchPhrase: req.body.theCatchPhrase
  }

  Celeb.create(celebrity)
  .then((result) =>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    res.render('celebrities/newCeleb');
  })
})






router.get('/:id', (req, res, next) => {
  
  let id = req.params.id;
  
  Celeb.findById(id)
  .then((data) =>{
    res.render('celebrities/details', {celebDetails: data})
  })
  .catch((err)=>{
    next(err);
  })
})


router.post('/:id', (req, res, next) => {
  
  let id = req.params.id;
  
  let celebrity = {
    name: req.body.theName,
    occupation: req.body.theOccupation,
    catchPhrase: req.body.theCatchPhrase
  }

  Celeb.findByIdAndUpdate(id, celebrity)
  .then((result) =>{
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    next(err);
  })
})


router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id;

  Celeb.findByIdAndRemove(id)
  .then((result) =>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err);
  })
})



router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;

  Celeb.findById(id)
  .then((result) =>{
    res.render('celebrities/editCeleb', result);
  })
  .catch((err) =>{
    next(err);
  })
})






module.exports = router;
