const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie')


router.get('/', (req, res) => {

    Movie
      .find({}, { title: 1 })
      .then(allMovies => { res.render('movies/movie', { allMovies }) })
      .catch(err => console.log(err))
  
})


router.get('/show/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
      .findById(movieId)
      .then(theMovie => { res.render("movies/show", theMovie)})
      .catch(err => console.log(err))
  
})


router.get('/new', (req, res) => res.render('movies/new'))


router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body
  
  Movie
      
      .create({ title, genre, plot })
      .then(() => res.redirect('/movies'))
      .catch(err => console.log('Error:', err))
  
})


router.get('/delete/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
      .findByIdAndDelete(movieId)
      .then(() => res.redirect('/movies'))
      .catch(err => console.log('Error:', err))

})


router.get('/edit/:movie_id', (req, res) => {

  const { title, genre, plot } = req.body
  const movieId = req.params.movie_id

    Movie
      .findById(movieId)
      .then(theMovie => { res.render("movies/edit", theMovie)})
      .catch(err => console.log('Error:', err))
  
})


router.post('/edit/:movie_id', (req, res) => {

    const { title, genre, plot } = req.body
  const movieId = req.params.movie_id
  
    Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error:', err))
  
})



module.exports = router