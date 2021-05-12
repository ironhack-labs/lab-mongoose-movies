const router = require('express').Router()

const Movie = require('../models/Movie.model')

//routes

router.get('/movies', (req, res) => {
    Movie.find()
        .then(allmoviesDb => {
            console.log('movies2:',allmoviesDb)
            res.render('movies/list',{ movies: allmoviesDb})
        })
        .catch(e => console.log('error while listing movies'))
})

router.get('/movies/new', (req, res, next) => {
    console.log('entered to new')
    res.render('movies/new')
})

router.post('/movies/new', (req, res, next) => {
    const { title, genre, plot } = req.body

    Movie.create( { title, genre, plot } )
        .then(() => {
            console.log('Movie created succesfully')
            res.redirect('/movies')
        })
        .catch(() => {
            console.log('there was an error creating the Movie')
            res.render('movies/new')
        })
})


router.get('/movies/:movieId', (req, res, next) => {
    const { movieId } = req.params

    Movie.findById(movieId)
        .then(celebFromDb => {
            console.log('oneMovie:', celebFromDb)
            res.render('movies/show', {oneMovie: celebFromDb})
        })
        .catch(e => {
            console.log('error while getting Movie', e)
            next(e)
        })
})

router.post('/movies/:movieId/delete', (req, res, next) => {
    const { movieId } = req.params

    Movie.findByIdAndDelete(movieId)
        .then(celebFromDb => {
            console.log('oneMovie:', celebFromDb)
            res.redirect('/movies')
        })
        .catch(e => {
            console.log('error while deleting Movie')
        })
})

module.exports = router