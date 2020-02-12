const express = require("express");
const router = new express.Router();
const moviesModel = require("../models/movies");

router.get("/movies/new", (req,res) => {
    res.render("/movies/new");
});

router.post("/movies/new", (req, res) => {
    const {title, genre, plot} = req.body;
    moviesModel 
        .create({
            title,
            genre,
            plot,
        })
        .then(dbRes => res.redirect("movies/index"))
        .catch(dbErr => {
            console.log(dbErr);
            res.send("Oh no, an error occured while creating new movie !");
        });
});

router.get("/movies/:id", (req, res) => {
    moviesModel
        .findById(req.params.id)
        .then(movies => {
            res.render("movies/show", { movies });
        })
        .catch(dbErr => console.error ("Oh no, db err :", dbErr));
});

router.get("movies/new/delete/:id", (req, res) => {
    moviesModel 
        .findByIdandRemove(req.params.id)
        .then(dbRes => {
            res.redirect("/movies/index");
        })
        .catch(dbErr => {
            console.error(dbErr);
        });
});