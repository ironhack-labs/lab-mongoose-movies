const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')


router.get('/', (req, res) => {
    Movie.find()
        .then(moviesArr => res.render('movies.views/index', {
            moviesArr
        }))
        .catch(error => console.log('Error: ', error))
})



router.get('/create', (req, res) => res.render('movies.views/createMovie'))

router.post('/create', (req, res) => {

    const {
        title,
        genre,
        plot
    } = req.body

    Movie.create({
            title,
            genre,
            plot
        })
        .then(() => res.redirect('/movies'))
        .catch(error => console.log('Error: ', error))

})


router.get('/:id/edit', (req, res) => {

    Movie.findById(req.params.id)
        .then(movie => res.render('movies.views/edit', movie))
        .catch(error => console.log('Error: ', error))
})


router.post('/:id', (req, res) => {

    const {
        title,
        genre,
        plot
    } = req.body

    Movie.findByIdAndUpdate(req.params.id, {
            title,
            genre,
            plot
        })
        .then(() => res.redirect(`/movies/${req.params.id}`))
        .catch(error => console.log('Error: ', error))
})


router.post('/:id/remove', (req, res) => {

    Movie.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(error => console.log('Error: ', error))

})




router.get('/:movieID', (req, res) => {

    Movie.findById(req.params.movieID)
        .then(movie => res.render('movies.views/details', movie))
        .catch(error => console.log('Error: ', error))
})




module.exports = router