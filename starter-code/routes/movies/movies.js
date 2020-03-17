const express = require('express');
const router  = express.Router();
const Movie = require('../../models/movie');



router.get('/', async(req, res, next) => {
    const movies = await Movie.find()
    res.render('movies/index', {movies});
  });
  


router.get('/new', async(req, res, next) => {
    
    res.render('movies/new');
});


router.post('/new', async(req, res, next) => {
    try{
        const {title, genre, plot} = req.body;
        await new Movie({title, genre, plot}).save();
        res.redirect('/movies');
    }catch{
        res.render('movies/new');
    }
});


router.post('/:_id/delete', async(req, res, next) => {
    try {
        const id = req.params;
        await Movie.findOneAndDelete(id);
        res.redirect('/movies');
    } catch (error) {
        next(error);
    }
});

router.get('/:_id/edit', async(req, res, next) => {
    try {
        const movie = await Movie.findOne(req.params);
        res.render('movies/edit', movie);
    } catch (error) {
        next(error);
    }
});

router.post('/:_id/edit', async(req, res, next) => {
    try {
        const { title, genre, plot } = req.body;
        await Movie.update({_id: req.body.id}, {$set: { title, genre, plot }});
        res.redirect('/movies')
    } catch(error){
        next(error);
    }
});


router.get('/:_id', async (req, res, next) => {
    try{
        const movie = await Movie.findOne(req.params);
        res.render('movies/show', movie);
    } catch(error){
        next(error);
    }
});





module.exports = router;