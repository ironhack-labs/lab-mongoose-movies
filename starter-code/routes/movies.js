const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie");
const { route } = require("./celebrities");

//show movies list
router.get("/", async (req, res, next) => {
        try {
                const listMovies = await MovieModel.find();
                console.log(listMovies)
                res.render("movies/index", { listMovies })
        } catch (err) {
                next(err);
        }
});

//show form to add a new movies
router.get("/new", (req, res, next) => {
        try {
                res.render("movies/new")
        } catch (err) {
                next(err)
        }
});

//show movie details
router.get("/:id", async (req, res, next) => {
        try {
                const movie = await MovieModel.findById(req.params.id)
                res.render("movies/show", movie);
        } catch (err) {
                next(err)
        }
});

//show form to edit movie

router.get("/:id/edit", async (req, res, next) => {
        try {
                const editMovie = await MovieModel.findById(req.params.id);
                res.render("movies/edit", editMovie)
        } catch (err) {
                next(err)
        }
})

//add a new movie
router.post("/", async (req, res, next) => {
        try {
                await MovieModel.create(req.body);
                res.redirect("/movies")
        } catch (err) {
                res.render("movies/new", { tryAgain: 'Try again' })
        }
})

//delete a specific movie
router.post("/:id/delete", async (req, res, next) => {
        try {
                // console.log(req.params.id)
                await MovieModel.findByIdAndRemove(req.params.id);
                res.redirect("/movies")

        } catch (err) {
                next(err);
        }
})

// edit a specific movie
router.post("/:id", async (req, res, next) => {
        try {
                await MovieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
                res.redirect("/movies");
        } catch (err) {
                next(err);
        }
})

module.exports = router;