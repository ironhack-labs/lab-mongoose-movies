const express = require('express');
const router = express.Router();
const Movies = require('../models/movie');
const Celebrities = require('../models/celebrity');

router.get('/', (req, res) =>{
        Movies.find()
            .then(movies => {
                res.render('movies/movies', { movies });
            })
            .catch(err => {
                throw new Error(err.message);
            })
});

router.get('/new', (req, res) => {
    Celebrities.find()
        .then(celebs => {
            res.render('movies/new-movie', { celebs });
        })
        .catch(err => {
            throw new Error(err.message);
        })
})

router.post('/create', async (req, res) => {
    const newMovie = new Movies({...req.body });
    try{
        await newMovie.save();
        res.redirect('./');
    }catch (err){
        res.render('movies/new-movie');
        throw new Error(err.message);
    }
})

router.get('/:_id', (req, res) => {
    Movies.findOne(req.params)
        .then(mov => {
            console.log(mov);
            res.render('movies/movie-details', mov);
        })
        .catch(err => {
            throw new Error(err.message);
        })
})

router.post('/:_id/delete', (req, res) => {
    Movies.findByIdAndRemove(req.params)
        .then(() => {
            res.redirect('/movies');
        }).catch(err => {
            throw new Error(err.message);
        })
})

router.get('/:id/edit', (req, res) => {

})

router.post('/:id', (req, res) => {
    
})

module.exports = router;
