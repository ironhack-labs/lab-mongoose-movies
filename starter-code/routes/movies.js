const express = require('express');
const router = express.Router()
const Movie = require('../models/Movie')

router.get('/movies', async(req, res) => {
    const mov = await Movie.find()
    res.render(`movies/index`, { mov })
})

router.get('/movies/:id', async(req, res) => {
    const { id } = req.params
    const movie = await Movie.findById(id)
    res.render('movies/show', { movie })
})

router.get('/newMovie', (req, res) => {
    res.render('movies/new')
})

router.post('/newMovie', async(req, res) => {
    try {
        const { title, genre, plot } = req.body
        await Movie.create({ title, genre, plot })
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
})

router.post('/movies/:id/delete', async(req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findByIdAndRemove(id)
        res.redirect('/movies')
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;