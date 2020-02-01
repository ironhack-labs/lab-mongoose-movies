const express = require("express");
const routers = new express.Router();
const movieModel = require("../models/movie");

routers.get("/movies", (req, res, next) => {
    movieModel
        .find()
        .then(movies => {
            res.render("movies/index", {
                movies
            });
        })
        .catch(dbErr => next(dbErr));
});

routers.get("/movies/new", (req, res, next) => {
    res.render("movies/new");
});

routers.get("/movie/:id", (req, res, next) => {
    movieModel
        .findById(req.params.id)
        .then(movie => {
            res.render("movies/show", {
                movie
            });
        })
        .catch(dbErr => next(dbErr));
});

routers.post("/movies", (req, res) => {
    const {
        title,
        genre,
        plot
    } = req.body;
    movieModel
        .create({
            title,
            genre,
            plot
        })
        .then(dbRes => res.redirect("/movies"))
        .catch(dbErr => {
            res.render("movies/new");
        });
});

routers.post("/movie/:id/delete", (req, res, next) => {
    movieModel
        .findByIdAndDelete(req.params.id)
        .then(dbRes => {
            console.log(dbRes);
            res.redirect("/movies");
        })
        .catch(dbErr => {
            next(dbErr);
        });
});
routers.get("/movie/:id/edit", (req, res, next) => {
    movieModel.findById(req.params.id)
        .then(movie => {
            res.render("movies/update", {
                movie
            })
        })
        .catch(dbErr => next(dbErr))
});

routers.post("/movies/:id", (req, res, next) => {
    const {
        title,
        genre,
        plot
    } = req.body;
    movieModel
        .findByIdAndUpdate(req.params.id, {
            title,
            genre,
            plot
        })
        .then(dbRes => {
            console.log(dbRes);
            res.redirect("/movies");
        })
        .catch(dbErr => {
            next(dbErr);
        });
});

module.exports = routers;