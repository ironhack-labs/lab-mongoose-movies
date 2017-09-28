const express = require('express');
const Film = require('../models/movies');

const router = express.Router();

router.get('/films', (req, res, next) => {
  Film.find({}).sort().exec((err, films) => {
    if (err) return next(err)
    res.render('films/index', { films })
  });
});

router.get('/films/:id/show', (req, res, next) => {
  const films = {
    movID: req.params.id
  }
  Film.findById(films.movID, (err, mov) => {
    if (err) return next(err)
    res.render('films/show', { mov })
  });
});

router.get('/films/new', (req, res, next) => {
  res.render('films/new')
});

router.post('/films', (req, res, next) => {
  const mov = new Film ({
  	name: req.body.name,
  	genre: req.body.genre,
  	plot: req.body.plot,
  })
  mov.save((err,mov) => {
  	if (err) res.redirect('films/new')
  res.redirect('films')
  })
})

router.post('/films/:id/delete', (req,res,next) => {
const films = {
    movID: req.params.id
  }
  Film.findByIdAndRemove(films.movID, (err, mov) => {
    if (err) return next(err)
    res.redirect('/films')
  });
});

router.get('/films/:id/edit', (req,res,next) => {
const mov = {
    movID: req.params.id
  }
  Film.findById(mov.movID, (err, mov) => {
    if (err) return next(err)
    res.render('films/edit', {mov})
  });
});

router.post('/films/:id', (req,res,next) => {
const ID = req.params.id
const mov = {
    name: req.body.name,
  	genre: req.body.genre,
  	plot: req.body.plot,
  }
  Film.findByIdAndUpdate(ID, mov, (err, movUpdated) => {
    if (err) return next(err)
    res.redirect('/films')
  });
});

module.exports = router