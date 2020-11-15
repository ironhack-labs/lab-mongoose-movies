/*jshint esversion: 6 */

const express = require('express')
const Movie = require('../models/movie.model')
const router = express.Router()


router.get('/', (req, res) => {

  Movie
          .find()
          .then(allMovies => res.render('movies/index.hbs', { allMovies }))
          .catch(err => console.log(err))
  
})


router.get('/new', (req, res) => res.render('movies/new.hbs'))

router.post('/', (req, res) => {

        const { title, genre, plot } = req.body


        if (!title || !genre || !plot) {
                res.render('movies/new.hbs', { errorMsg: 'Completa todos los campos' })
                return
        }

        Movie
                
                .create(req.body)
                .then(res.redirect('/movies'))
                .catch(err => console.log('Error al añadir nueva película', err))
        
})


router.post('/:id/delete', (req, res) => {

  Movie
          .findByIdAndRemove(req.params.id)
          .then(res.redirect('/movies'))
          .catch(err => console.log(err))
})


router.get('/:id', (req, res) => {

  Movie
          
          .findById(req.params.id)
          .then(allInfo => res.render('movies/show.hbs', { allInfo }))
          .catch(err => console.log(err))


})


router.post('/:id', (req, res) => {

        const { title, genre, plot } = req.body

        Movie
                .findByIdAndUpdate(req.params.id, { title, genre, plot })
                .then(res.redirect('/movies'))
                .catch(err => console.log(err))           

})



router.get('/:id/edit', (req, res) => {

        Movie
        .findById(req.params.id)
        .then(movieDet => res.render('movies/edit', { movieDet }))
        .catch(err => console.log(err))

})




module.exports = router