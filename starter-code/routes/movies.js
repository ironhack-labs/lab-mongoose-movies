const express = require("express");
const router = express.Router()
const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {
    Movie.find({}).then(movies => {
        res.render('movies/index', { movies });
    })
});

router.get("/new", (req, res, next) => {
    res.render("movies/new");
});

router.post('/new', (req, res, next) => {
    const { title, genre, plot } = req.body;
    new Movie({ title, genre, plot })
        .save().then(movie => {
            console.log("Movie created!");
            res.redirect('/movies');
        });
});

router.get("/:id", (req, res, next) => {
    Movie.findById(req.params.id).then(movie => {
        res.render("movies/show", { movies });
    });
});

router.get('/edit/:id', (req, res) => {
    Movie.findById(req.params.id).then(movie => {
        res.render('movies/edit', { movies });;
    });
});

router.get("/delete/:id", (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id, () => res.redirect("/movies"))
});