const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie');
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next)=>{
  Movies.find().populate('celebrity')
  .then((movs)=>{
    res.render('movies', {Movies: movs})
  })
  .catch((err)=>{
    next(err)
  })
})

router.get('/new', (req, res, next)=>{
  // res.render('movies/new');
  Celebrity.find()
  .then((all)=>{
    res.render('movies/new', {celebrities: all});
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/:ID', (req, res, next)=>{
  Movies.findById(req.params.ID).populate('celebrity')
  .then((mov)=>{
    res.render('movies/show', {Movie: mov});
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/', (req, res, next)=>{
  const newMovie = new Movies(req.body);
  newMovie.save()
  .then(()=>{
    res.redirect('/movies');
  })
  .catch((err)=>{
    res.redirect('/movies/new');
    next(err);
  })
})


router.get('/:id/delete', (req, res, next)=>{
  Movies.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/:id/edit', (req, res, next)=>{
  Movies.findById(req.params.id)
  .then((mov)=>{
    res.render('movies/edit', mov);
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/:id', (req, res, next)=>{
  Movies.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{
    res.redirect('/movies/'+req.params.id);
  })
  .catch((err)=>{
    next(err)
  })
})


module.exports = router;