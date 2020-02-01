const express = require('express');
const router  = express.Router();
const movieModel = require("../models/Movie");

router.get("/", (req, res) => {
    movieModel
        .find()
        .then(dbRes => {
            res.render("movies/movies", {
                movies: dbRes
            });
        })
        .catch(dbErr => {
            console.error(dbErr);
        })
})

router.get("/info-movie/:id", (req,res) => {
    movieModel
        .findById(req.params.id)
        .then(dbRes => {
            res.render("movies/info-movie", {
                movie: dbRes
            });
        })
        .catch(dbErr => {
            console.error(dbErr);
        })
})

router.get("/new", (req, res) => {
    res.render("movies/new");
})

router.post("/new", (req,res) => {
    const {title, genre, plot} = req.body;
    movieModel 
        .create({
            title,
            genre,
            plot
        })
        .then(res.redirect('/movies'))
        .catch(dbErr => {
            console.error(dbErr);
        });
})

router.get("/delete/:id", (req,res) => {
    movieModel
        .findByIdAndDelete(req.params.id)
        .then(res.redirect("/movies"))
        .catch(dbErr => {
            console.error(dbErr);
    });
})


module.exports = router;