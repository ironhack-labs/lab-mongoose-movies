const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/',(req,res,next) => {
    Movie.find()
    .then (movies => {
        res.render('movies/moviesindex',{movies})
    })
    .catch (err => {
        console.log(err)
    })
});
router.get('/add', (req, res, next) => {
    res.render('movies/new');
  });  

router.post('/', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const newMovie = new Movie({title, genre, plot});
    newMovie.save()
            .then(() => {
                res.redirect('/movies')
            })
            .catch(error => {
                console.log(error)
            })
})

router.post('/:id/delete', (req,res,next) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(() => {
        res.redirect('/movies')
    })
    .catch(error => {
        console.log(error)
    })
});

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('movies/show',{movie})
    })
    .catch(error => {
        console.log(error)
    })
});





module.exports = router;