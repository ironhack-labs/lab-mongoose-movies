const express = require('express');
const router  = express.Router();

const Movies = require('../models/Movie.model.js')

/* GET home page */
router.get('/movies', (req, res) => {
    Movies.find({})
        .then(movies => res.render('movies/index',  { movies }))
        .catch(err => console.log('Error', err))
});

router.get('/movies/:id', (req, res) => {
    Movies
        .findById(req.params.id)
        .then(movie => res.render('movies/show', { movie }))
        .catch(err => console.log('Error', err))
})


router.get('/newmovie', (req, res) => {
    res.render('./movies/new')
})

router.post('/newmovie', (req,res) => {
    const { title, genre, plot } = req.body
    Movies
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(e => console.log(e))
  
})


router.post('/movies/:id/delete',(req,res) => {
    Movies.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(e => console.log(e))
})

router.get('/movies/:id/edit',(req,res) => {
    Movies.findById(req.params.id)
        .then(movie => res.render('movies/edit', { movie }))
        .catch(e => console.log(e))
})

router.post('/movies/:id/edit',(req,res) => {
    const {title, genre, plot} = req.body
    Movies.findByIdAndUpdate(req.params.id, { title, genre, plot }, { new: true })
        .then(() => res.redirect('/movies'))
        .catch(e => console.log(e))
})

module.exports = router