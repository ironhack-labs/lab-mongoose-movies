const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js');

router.get("/movies", (req, res, next) => {
    Movie
        .find()
        .then((data) => {
            res.render("movies/index",{data});
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})

router.get("/movies/:id", (req, res, next) => {
    let { id } = req.params;
    Movie
        .findById(id)
        .then((data) => {
            res.render("movies/show",data);
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})

router.get("/new-movies", (req, res, next) => {
    res.render("movies/new");
})

router.post("/movies", (req, res, next) => {
    Movie
        .create(req.body)
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            res.render("movies/new");
            console.log(err);
        })
})

router.get("/movies/:id/delete", (req, res, next) => {
    let { id } = req.params;
    Movie
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect("/movies");
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})

router.get("/movies/edit/:id/", (req, res, next) => {
    let { id } = req.params;
    Movie
    .findById(id)
    .then(() => {
        res.render("movies/edit", {id});
    })
    .catch((err) => {
        next();
        console.log(err);
    })
})

router.post("/movies/edit/:id", (req, res, next) => {
    let { id } = req.params;
    Movie
        .findByIdAndUpdate(id, req.body)
        .then(() => {
            res.redirect("/movies");
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})

module.exports = router;