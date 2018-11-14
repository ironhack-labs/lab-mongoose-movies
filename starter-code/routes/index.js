const express = require('express');
const router  = express.Router();
const Celeb = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celeb.find()
    .then((celebsFromDB)=>{
      res.render('views-celebs/celeb', {allCelebs: celebsFromDB});
    })
    .catch((err)=>{
      next(err);
    })
});

router.get('/celebrities/new', (req, res, next) => {
  Celeb.find()
  .then((allTheCelebs)=>{
      res.render('views-celebs/new-celeb', {allTheCelebs})
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

router.post('/celebrities/:theID/delete', (req, res, next)=>{
  Celeb.findByIdAndRemove(req.params.theID)
    .then(()=>{
      res.redirect('/celebrities');
  })
    .catch((err)=>{
      console.log(err);
      next(err);
  })
})

router.get('/celebrities/:theID/edit', (req, res, next)=>{
  Celeb.findById(req.params.theID)
    .then((theCeleb)=>{
      res.render('views-celebs/edit', {theCeleb})
  })
    .catch((err)=>{
      console.log(err);
      next(err);
  })
})

router.post('/celebrities/:theID/update', (req, res, next)=>{
  Celeb.findByIdAndUpdate(req.params.theID, req.body)
    .then(()=>{
      res.redirect('/celebrities/'+req.params.theID);
  })
  .catch((err)=>{
      next(err)
  })
})

router.get('/celebrities/:theID', (req, res, next)=>{
  Celeb.findById(req.params.theID)
    .then((specificsFromDB)=>{
      res.render('views-celebs/celeb-det', {theSpecifics: specificsFromDB})
  })
    .catch((err)=>{
      next(err);
  })
})

module.exports = router;
