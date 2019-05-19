const express = require('express');
const router = express.Router();
const Movie = require("../models/movie");

/* GET movie Index */
router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      res.render('movies', { movie: allMovies });
    })
    .catch(error => {
      console.log(error)
    })

});

/* GET movie detail */
router.get('/show/:movie_id', (req, res, ) => {

  Movie.findById(req.params.movie_id)
    .then(theMovie => {
      res.render('movies/show', theMovie);
    })
    .catch(error => {
      console.log(error)
    })
});


/* GET NEW movie */
router.get('/new', (req, res, next) => {
  res.render('movies/new');
});


/* POST NEW movie */
router.post('/new', (req, res, next) => {
  const { title, genre, plot } = req.body
  const newMovie = new Movie({ title, genre, plot })
  newMovie.save()
    .then(
      res.redirect("/")
    )
    .catch(error => {
      console.log(error)
    })

})

/* GET UPDATE movie */
router.get('/:id/edit', (req, res, next) => {
  Movie.findById({ _id: req.params.id })
    .then(movie => {
      res.render('movies/edit', { movie });
    })
    .catch(error => {
      console.log(error)
    })
});

router.post('/edit', (req, res) => {
  const { title, genre, plot } = req.body
  Movie.update({ _id: req.query.movie_id }, { $set: { title, genre, plot } })
    .then(movie => {
      res.redirect('/movies')
    })
    .catch(error => console.log(error))
})

/* POST DELETE movie */
router.post('/:id/delete', (req, res, next) => {

  Movie.findOneAndDelete({ _id: req.params.id })
    .then(theMovie => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
    })

})

module.exports = router;