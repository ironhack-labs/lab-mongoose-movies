const express = require('express')
const router = express.Router()
const Movies = require('../models/celebrity')

//lista de celebrities

router.get('/', (req, res, next) => {
    Movies.find()
        .then(allMovies => res.render('movies/index', { allMovies }))
        .catch(err => console.log('Error', err))
})

router.get('/details/:id', (req, res, next) => {
    Movies.findById(req.params.id)
        .then(movieDet => res.render('movies/show', movieDet))
        .catch(err => console.log('Error', err))
})



router.get('/new', (req, res, next) => res.render('movies/new'))
router.post('/new', (req, res, next) => {

    const { title, genre, plot } = req.body

    Movies.create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error', err))

})

//delete celeb

router.post('/details/:id/delete', (req, res, next) => {
    Movies.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error', err))
})

//edit celeb 

router.get('/details/:id/edit', (req, res, next) => {

    Movies.findById(req.params.id)
        .then(celebEdit => res.render('movies/edit', { movieEdit }))
        .catch(err => console.log('Error', err))
})

router.post('/details/:id/edit', (req, res, next) => {
    const { title, genre, plot } = req.body

    Movies.findByIdAndUpdate(req.params.id, { title, genre, plot }, { new: true })
        .then(updatedMovie => res.redirect(`/movies/details/${updatedMovie.id}`))
        .catch(err => console.log('Error', err))
})


module.exports = router