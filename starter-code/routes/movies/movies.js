const express = require('express');
const router = express.Router();
const Movie = require("../../models/movie")

/* GET home page */
router.get('/', async(req, res, next) => {
    try {
        const movies = await Movie.find();
        res.render('movies/index', { movies });
    } catch (error) {
        next(error);
    }

});

router.get('/new', async(req, res, next) => {
    try {
        console.log("hola");
        res.render('movies/new');
    } catch (error) {
        next(error);
    }

});

router.post('/new', async(req, res, next) => {
    try {
        console.log(req.body);
        const { title, genre, plot } = req.body;
        await new Movie({
            title,
            genre,
            plot
        }).save();
        res.redirect('/movies')
    } catch {
        res.render('movies/new')
    }

});

router.get('/:_id', async(req, res, next) => {
    try {
        const movie = await Movie.findOne(req.params);
        res.render('movies/show', movie);
    } catch (error) {
        next(error);
    }
});
router.post('/:_id/delete', async(req, res, next) => {
    try {
        const id = req.params;
        console.log(id);
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
        console.log(req.body);
        const { id, title, genre, plot } = req.body;
        console.log(id);
        await Movie.update({ _id: id }, {
            $set: {
                title,
                genre,
                plot
            }
        });
        res.redirect('/movies')
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;
