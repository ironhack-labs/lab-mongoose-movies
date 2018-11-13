const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity-model.js")
const Movie = require("../models/movie-model.js")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) =>{
  Celebrity.find()
    .then(data => {
      res.locals.celebList = data;
      res.render('celebrities.hbs')
    })
    .catch(err => next(err))
});

router.get('/celebrities/:celebId', (req, res, next) => {
  const { celebId } = req.params; // url parameter = :celebId
  Celebrity.findById(celebId)
    .then(data => {
      res.locals.oneCeleb = data;
      res.render('celeb-details.hbs')
    })
    .catch(err => next(err))
})

router.get('/new', (req, res, next) => {
  res.render('new.hbs')
})

router.post('/celebrities/process-new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  
  Celebrity.create( { name, occupation, catchPhrase } )
  .then(data => {
    res.redirect("/celebrities")
  })
  .catch(err => next(err))
})

router.get('/celebrities/:celebId/delete', (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findByIdAndRemove(celebId)
    .then(data => {
      res.redirect("/celebrities")
    })
    .catch(err => next(err))
})

router.get('/celebrities/:celebId/edit', (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findById(celebId)
    .then(data => {
    res.locals.oneCeleb = data;
    res.render('edit-form.hbs')
    })
    .catch(err => next(err))
})

router.post('/celebrities/:celebId/process-edit', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const { celebId } = req.params;
  Celebrity.findByIdAndUpdate( 
    celebId,
    {$set: {name, occupation, catchPhrase}},
    {runValidators: true}
  )
    .then(data => {
      res.redirect(`/celebrities/${celebId}`)
    })
    .catch(err => next(err))
})

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(data => {
      res.locals.movieList = data;
      res.render('movies.hbs')
    })
    .catch(err => next(err))
})

router.get('/movies/:movieId', (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then(data => {
      res.locals.oneMovie = data;
      res.render('movie-details.hbs')
    })
    .catch(err => next(err))
})

router.get('/new-movie', (req, res, next) => {
  res.render('new-movie.hbs')
})

router.post('/process-movie', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create( { title, genre, plot } )
    .then(data => {
      res.redirect('/movies')
    })
    .catch(err => next(err))

})

router.get('/:movieId/delete', (req, res, next) => {
  const { movieId } = req.params;
  Movie.findByIdAndRemove( movieId )
    .then(data => {
      res.redirect('/movies')
    })
    .catch(err => next(err))
})

router.get('/:movieId/edit', (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
  .then(data => {
    res.locals.oneMovie = data;
    res.render('edit-movie.hbs')
  })
  .catch(err => next(err))
})

router.post('/:movieId/edit-movie', (req, res, next) => {
  const { movieId } = req.params;
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(
    movieId,
    {$set: {title, genre, plot}},
    {runValidators: true},
  )
    .then(data => {
      res.redirect('/movies')
    })
    .catch(err => next(err))
})

module.exports = router;
