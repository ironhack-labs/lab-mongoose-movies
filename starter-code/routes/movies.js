const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies/all', { movies }))
    .catch(err => console.log(err))
})

router.get('/new', (req, res, next) => {
  const config = {
    title: 'New movie',
    action: '/movies/new',
    value: 'Create!',
    return: '/movies'
  }
  res.render('movies/new', config)
})

router.post('/new', (req, res, next) => {
  Movie.create({ ...req.body })
    .then(movie => res.redirect('/movies'))
    .catch(err => console.log(err))
})

router.post('/delete', (req, res, next) => {
  const { id } = req.body
  Movie.findByIdAndRemove(id)
    .then(movie => res.redirect('/movies'))
    .catch(err => console.log(err))
})

router.get('/edit/:id', (req, res, next) => {
  const { id } = req.params
  Movie.findById(id)
    .then(movie => {
      const config = {
        title: 'Edit movie',
        action: `/movies/edit/${movie.id}`,
        value: 'Edit!',
        return: `/movies/${movie.id}`,
        movie
      }
      res.render('movies/new', config)
    })
    .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res, next) => {
  const { id } = req.params
  Movie.findByIdAndUpdate(id, {$set: { ...req.body } }, { new: true })
    .then(movie => res.redirect(`/movies/${movie.id}`))
    .catch(err => console.log(err))
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Movie.findById(id)
    .then(movie => res.render('movies/show', movie))
    .catch(err => console.log(err))
})


module.exports = router 