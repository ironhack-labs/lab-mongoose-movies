const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Movies = require("../models/movie");



router.get("/", (req, res, next) => {
    Movies.find().then(dbRes => {
            // console.log(dbRes);
            res.render("movies/index", {
                movies: dbRes
            });
        })
        .catch(err => {
            next(err)
        });
});


router.get("/new", (req, res) => {
    res.render("movies/new");
});

router.get("/:id", (req, res, next) => {

    Movies.findOne({
        _id: req.params.id
    }).then(dbRes => {
        // console.log(dbRes);
        res.render("movies/show", {
            movie: dbRes
        });

    }).catch(err => console.log(err))
});

router.get("/:id/edit", (req, res, next) => {
    Movies.findById(req.params.id)
        .then(dbRes => {
            res.render("movies/edit", {
                movie: dbRes
            });
        })
        .catch(dbErr => {
            console.log("db error during editing", dbErr);
        });
});


//Create new movie
router.post("/movie", (req, res) => {
    const infos = req.body;
    const movie = new Movies(infos);
    movie.save()
        .then(dbRes => {
            res.redirect("/movies");
        })
        .catch(dbErr => {
            res.render("movies/new");
        });
});

//Delete movie
router.post("/:id/delete", (req, res, next) => {
    Movies.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect("/movies")
        })
        .catch((err) => {
            next(err);
            console.log(err);
        });
});

//Edit movie    
router.post("/:id", (req, res) => {
    const info = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    };
    // console.log(info);
    // console.log("***************")
    // console.log(req.params.id)
    Movies.findOneAndUpdate({
            _id: req.params.id
        }, info)
        .then(dbRes => {
            console.log(dbRes, "updated!");
            res.redirect("/movies");
        })
        .catch(dbErr => {
            console.log(dbErr, "db error with update");
            next();
        });
});


module.exports = router;