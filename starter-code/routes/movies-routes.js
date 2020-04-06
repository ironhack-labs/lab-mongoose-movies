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
    console.log(req.body);
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

router.get('/:_id/edit', async(req, res) => {
    try {
        const mov = await Movies.findById(req.params._id);
        const celebs = await Celebrities.find();
        const movCelebs = {mov, celebs};
        res.render('movies/edit-movie', movCelebs);
    } catch (err) {
        throw new Error(err.message);
    }
})

router.post('/:_id', async (req, res) => {
    try {   
        const {cast, title, genre, plot} = req.body;
        await Movies.findByIdAndUpdate(req.body._id, { cast, title, genre, plot });
        res.redirect('/movies');
    } catch (err) {
        throw new Error(err.message);
    }
})

module.exports = router;
