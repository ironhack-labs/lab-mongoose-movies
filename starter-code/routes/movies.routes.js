const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.model')

// Get the list of the movies

router.get('/', (req, res) => {
  Movie.find()
    .then(allTheMovies => res.render('movies/moviesList', { movies: allTheMovies }))

    .catch(err =>( res.render("error" , err)))
});

// Get the details of each movie

router.get('/details/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(theMovie => res.render('movies/moviesDetails', { movie: theMovie }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});


// Add a new movie

router.get('/newMovie', (req, res) => res.render('movies/newMovie'))

router.post('/newMovie', (req, res) => {

  const { title, genre, plot } = req.body

  if (!title || !genre || !plot) {
    res.render('movies/newMovie', { errorMessage: 'ERROR: Fill all the gaps' })
    return
  }

  Movie.findOne({ "title": title })
    .then(mov => {
      if (mov) {
        res.render("movies/newMovie", { errorMessage: "ERROR: The movie is already in the database" })
        return
      }

      Movie.create({ title, genre, plot })
        .then(() => {
          res.redirect("/movies")
        })
        .catch(error => console.log(error))
    })
    .catch(error => { console.log(error) })
})


// Edit a movie

router.get('/edit', (req, res) => {
  const movieId = req.query.movieyId
  Movie.findById(movieId)
  .populate('title')
  .then(theMovie => res.render('movies/editMovie', theMovie))
  .catch(err => console.log('error!!', err))
})


router.post('/edit', (req, res) => {
  const { title, genre, plot } = req.body
  const movieId = req.query.movieId
  
  Movie.findByIdAndUpdate(movieId, { title, genre, plot })
  .then(res.redirect('/movies'))
  .catch(err => console.log('error!!', err))
  
})

// Delete a movie

router.get('/delete', (req, res) => {
  const movieId = req.query.movieId
  Movie.findById(movieId)
    .then(theMovie => res.render('movies/deleteMovie', theMovie))
    .catch(err => console.log('error!!', err))
})

router.post('/delete', (req, res) => {
  const { title, genre, plot } = req.body
  const movieId = req.query.movieId

  Movie.findByIdAndRemove(movieId, { title, genre, plot })
    .then(res.redirect('/movies'))
    .catch(err => console.log('error!!', err))
})

module.exports = router;
