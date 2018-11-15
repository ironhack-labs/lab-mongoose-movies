const express = require('express');
const router  = express.Router();
const Celeb    = require('../models/Celebridades');


router.get('/', (req, res, next) => {
    Celeb.find()
    .then((allTheCelebs)=>{
        res.render('celebrities/list-celebs', {celebs: allTheCelebs})
    })
    .catch((err)=>{
      console.log(err.message);
        next(err);
    })
});

router.get('/celebrities/list-celebs', (req, res, next) => {
  Celeb.find()
  .then((allTheCelebs)=>{
      res.render('celebrities/list-celebs', {celebs: allTheCelebs})
  })
  .catch((err)=>{
    console.log(err.message);
      next(err);
  })
});

router.get('/celebrities/details-celebs', (req, res, next) => {
  Celeb.find()
  .then((allTheCelebs)=>{
      res.render('celebrities/details-celebs', {celebs: allTheCelebs})
  })
  .catch((err)=>{
    console.log(err.message);
      next(err);
  })
});

router.get('/celebrities/edit-celebs', (req, res, next) => {
  Celeb.find()
  .then((allTheCelebs)=>{
      res.render('celebrities/edit-celebs', {celebs: allTheCelebs})
  })
  .catch((err)=>{
    console.log(err.message);
      next(err);
  })
});

router.get('/celebrities/add-celebs', (req, res, next) => {
  Celeb.find()
  .then((allTheCelebs)=>{
      res.render('celebrities/add-celebs', {celebs: allTheCelebs})
  })
  .catch((err)=>{
    console.log(err.message);
      next(err);
  })
});



module.exports = router;