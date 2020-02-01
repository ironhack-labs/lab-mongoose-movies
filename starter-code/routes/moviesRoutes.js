const express = require('express');
const router = express.Router();
const movieModel = require('../model/movie');

router.get('/', async (req, res, next) => {
    try {
        const movies = await movieModel.find();
        res.render('movies/index', { movies });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const movie = await movieModel.findById(req.params.id);
        res.render('movies/show', { movie });
    } catch (err) {
        console.error(err);
        next();
    }
});


module.exports = router;
