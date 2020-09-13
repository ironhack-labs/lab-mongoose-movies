const express = require('express')
const router = express.Router()

const Movie = require('../models/moviemodel')


router.get('/movies/index', (req, res) => {

    Movie.find()
        .then(data => res.render('movies/index', { data }))
        .catch(err => console.log(err))

})


router.get('/movies/show/:id', (req, res) => {
    
    Movie.findById(req.params.id)
        .then(foundMovie => res.render('movies/show', foundMovie))
        .catch(err => console.log(err))

})



router.get('/movies/new', (req, res) => {

    res.render('movies/new')
})

router.post('/movies/new', (req, res) => {

    const { title, genre, plot } = req.body
    
    Movie.create( { title, genre, plot })
        .then(() => res.redirect('index'))
        .catch(err => console.log(err))
})


router.get('/movies/delete/:id', (req, res) => {

    Movie.findByIdAndRemove(req.params.id)
        .then(() => res.render('index', { errorMessage: 'Movie eliminada de la base de datos satisfactoriamente!'}))
    .catch(err => console.log(err))
})


 

router.get('/movies/edit/:id', (req, res) => {


    Movie.findById(req.params.id)
        .then(foundMovie => res.render('movies/edit', foundMovie))
        .catch(err => console.log(err))
})


router.post('/movies/edit/:id', (req, res) => { 

  const { title, genre, plot } = req.body
  
  console.log(req.body)

    Movie.findByIdAndUpdate(req.params.id, {title, genre, plot}, {new: true})
        .then(foundMovie => res.render('movies/show', foundMovie))
        .catch(err => console.log(err))
})


module.exports = router