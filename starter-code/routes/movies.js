const express = require('express');
const router = express.Router();
const movies = require("../models/Movies");

/* GET home page */
router.get('/', (req, res, next) => {
  movies.find()
    .then((moviesFound) => {
      res.render('movies/index', { moviesFound })
    })
});

router.get('/:id', (req, res, next) => {
  movies.findOne({ _id: req.params.id })
    .then((movieFound) => {
      res.render('movies/show', movieFound)
    })
    .catch(() => {
      next()
    })

});

// router.get('/:id/edit', (req, res, next) => {
//   res.render('movies/edit',movie)
// });

router.post('/:id', (req, res, next) => {
  movies.updateOne(
    {_id: req.body.id},
    {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
      }
    )
    .then(()=>{
      res.redirect('/movies')
    })

})

router.post('/:id/edit', (req, res, next) => {
  movies.findOne({ _id: req.body.id })
    .then((movie) => {
      res.render('movies/edit', movie)
    })
    .catch(() => {
      next()
    })
});

router.post('/:id/delete', (req, res, next) => {
  movies.findByIdAndRemove(req.body.id)
    .then(() => {
      res.redirect('/movies')
    })
    .catch(() => {
      next()
    })
});


router.get('/new', (req, res, next) => {
  res.render('movies/new')

});

router.post('/', (req, res, next) => {
  movies.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })
    .then(() => {
      res.redirect('/movies')
    })
});

module.exports = router;