const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

//List
router.get('/', (request, response, next)=>{
    Movie.find()
    .then(movies=>{
        response.render('movies/index', {movies})
    })
    .catch(e=>{
        next(e)
    })
})

//Create
router.get('/new', (request, response)=>{
    const action = '/movies'
    response.render('movies/new')
})

router.post('/new', (request, response)=>{
    Movie.create(request.body)
    .then(movie=>{
        response.render('successful2', movie)
    })
    .catch(e=>{
        console.log(e)
        response.render('movies/new', {movie:request.body, e})
    })
})

//details by movie
router.get('/show/:id', (request, response, next)=>{
    const {id} = request.params
    Movie.findById(id)
    .then(movie=>{
        response.render('movies/show', movie)
    })
    .catch(e=>{
        next(e)
    })
})

//Delete
router.get('/delete/:id', (request, response)=>{
    const {id} = request.params
    Movie.findById(id)
    .then(movie=>{
        response.render('movies/delete', movie)
    })
    .catch(e=>{
        next(e)
    })
})

router.post('/delete/:id', (request, response)=>{
    const {id} = request.params
    Movie.findByIdAndRemove(id)
    .then(movie=>{
        response.redirect('/movies')
    })
    .catch(e=>{
        next(e)
    })
})

module.exports = router