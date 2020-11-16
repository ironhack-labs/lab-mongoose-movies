const express = require('express')
const router = express.Router()

const Movies = require('../models/movies.model')



//08. Movies - List
router.get('/', (req, res, next) => {

  Movies
    .find({}, { title: 1 })
    .sort({ title: 1 })
    .then(allMovies => res.render('movies/index', { allMovies }))
    .catch(err => console.log(err))
})

//09. Movies - Details
router.get('/show/:id', (req, res, next) => {
  const movieId = req.params.id

  Movies
    .findById(movieId)
    .then(theMovie => res.render('movies/show', theMovie))
    .catch(err => console.log(err))
})

//10. Movies - Creating
router.get('/new', (req, res, next) => res.render('movies/new'))

router.post('/new', (req, res, next) => {
  const { title, genre, plot } = req.body

  if (title.length === 0 || genre.length === 0 || plot.length === 0) {
    res.render('movies/new', { errMsg: 'All the fields are required.' })
    return
  }


  Movies
    .findOne({ title })
    .then(movie => {

      if (movie) {
        res.render('movies/new', { errorMsg: 'Movie already in the database' })
        return
      }

      Movies
        .create({ title, genre, plot })
        .then(() => res.render('movies/new', { successMsg: 'Register completed' }))
        .catch(err => console.log(err))
    })
})

//11. Movies - Deleting
router.post('/:id/delete', (req, res, next) => {

  const movieId = req.params.id

  Movies
    .findByIdAndDelete(movieId)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(err))
})


//12. Movies - Editing
router.post('/:id/edit', (req, res, next) => {

  const { title, genre, plot } = req.body
  const movieId = req.params.id

  Movies
    .findByIdAndUpdate(movieId, req.body)
    .then(movieInfo => res.redirect('/movies/show/${ movieId }'))
    .catch(err => console.log(err))
})


module.exports = router