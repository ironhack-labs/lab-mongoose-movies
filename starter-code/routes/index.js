const express = require('express');
const router  = express.Router();
const Celeb = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celeb.find()
    .then((celebsFromDB)=>{
      res.render('celeb', {allCelebs: celebsFromDB});
    })
    .catch((err)=>{
      next(err);
    })
});

router.get('/celebrities/new', (req, res, next) => {
  Celeb.find()
  .then((allTheCelebs)=>{
      res.render('new-celeb', {allTheCelebs})
  })
  .catch((err)=>{
      next(err);
  })
});

router.post('/celebrities/create', (req, res, next)=>{
  Celeb.create(req.body)
  .then(()=>{
      res.redirect('/celebrities');
  })
  .catch((err)=>{
      next(err)
  })
})

router.get('/celebrities/:theID', (req, res, next)=>{
  Celeb.findById(req.params.theID)
    .then((specificsFromDB)=>{
      res.render('celeb-det', {theSpecifics: specificsFromDB})
  })
    .catch((err)=>{
      next(err);
  })
})


module.exports = router;
