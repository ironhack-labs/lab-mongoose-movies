const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/movie');

router.get("/", async (req, res, next) => { 
    try {
        const movies = await Movie.find();
        res.render("movies/index", { movies });
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => { 
    try {
        const movie = await Movie.findById(req.params.id); 
        res.render("movies/show", movie);
    } catch (err) {
        next(err);
    }
});

router.get("/new", async (req, res, next) => { 
        res.render("movies/new");
});

router.post('/new', async (req, res, next) => { 
    try {
        await Movie.create(req.body);
        res.redirect('/movies');
    } catch (err) {
        next(err);
    }
});

router.post('/:id/delete', async (req, res, next) => {
    try {
        await Movie.findByIdAndRemove(req.params.id);
        res.redirect('/movies');
    } catch (err) {
        next(err);
    }
});

router.get('/:id/edit', async (req, res, next) => {
    try {
        const editMovie = await Movie.findById(req.params.id);
        res.redirect('/movies/edit', editMovie);
    } catch (err) {
        next(err);
    }
});

router.post('/:id/edit', async (req, res, next) => {
    try {
        await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/movies');
    } catch (err) {
        next(err);
    }
});

module.exports = router;