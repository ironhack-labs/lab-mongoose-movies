const express = require('express');
const Celeb = require('../models/celebrities');

const router = express.Router();

router.get('/celebs', (req, res, next) => {
  Celeb.find({}).sort().exec((err, celebs) => {
    if (err) return next(err)
    res.render('celebs/index', { celebs })
  });
});

router.get('/celebs/:id/show', (req, res, next) => {
  const celebs = {
    celebID: req.params.id
  }
  Celeb.findById(celebs.celebID, (err, celeb) => {
    if (err) return next(err)
     res.render('celebs/show', { celeb })
   });
});

router.get('/celebs/new', (req, res, next) => {
  res.render('celebs/new')
});

router.post('/celebs', (req, res, next) => {
  const celeb = new Celeb ({
  	name: req.body.name,
  	occupation: req.body.occupation,
  	catchPhrase: req.body.catchPhrase,
  })
  celeb.save((err,celeb) => {
  	if (err) res.redirect('celebs/new')
  res.redirect('celebs')
  })
})

router.post('/celebs/:id/delete', (req,res,next) => {
const celebs = {
    celebID: req.params.id
  }
  Celeb.findByIdAndRemove(celebs.celebID, (err, celeb) => {
    if (err) return next(err)
    res.redirect('/celebs')
  });
});

router.get('/celebs/:id/edit', (req,res,next) => {
const celeb = {
    celebID: req.params.id
  }
  Celeb.findById(celeb.celebID, (err, celeb) => {
    if (err) return next(err)
    res.render('celebs/edit', {celeb})
  });
});

router.post('/celebs/:id', (req,res,next) => {
const ID = req.params.id
const celeb = {
    name: req.body.name,
  	occupation: req.body.occupation,
  	catchPhrase: req.body.catchPhrase,
  }
  Celeb.findByIdAndUpdate(ID, celeb, (err, celebUpdated) => {
    if (err) return next(err)
    res.redirect('/celebs')
  });
});

module.exports = router