const express = require("express");
const router = express.Router();
const movieModel = require("../models/Movie");

// GET Movie's index page 
router.get("/movies/index", (req, res) => {
    movieModel
    .find()
    .then(movies => {
        res.render("movies/index", { movies });
    })
    .catch(err => {
        console.log(err);
    });
});

// GET Create Movie page
router.get("/movies/new", (req, res) => {
    res.render("movies/new");
})

// CREATE a movie
router.post("/movies/new", (req, res) => {
    const { title, genre, plot } = req.body;
    movieModel
    .create({
        title,
        genre,
        plot
    })
    .then(dbRes => {
        res.redirect("/movies/index");
    })
    .catch(dbErr => {
      console.error("ERROR", dbErr);
      res.send("Oops... an error occured while creating new movie");
      res.render('movies/new');
    });
});

// BEST PRACTICE : 
// ALL CODE DEPENDING ON IDs SHOULD BE AT THE END OF THE ROUTE

// GET Movie detail page
router.get("/movies/show/:id", (req, res) => {
    movieModel
    .findById(req.params.id)
    .then(movie => {
        res.render("movies/show", {movie});
    })
    .catch(err => {
        console.error("ERROR: ", err);
    });
});

// DELETE a movie
router.get("/movies/show/:id/delete", (req, res) => {
    movieModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
        res.redirect("/movies/index")
    })
    .catch(dbErr => {
      console.error("ERROR", dbErr);
      res.send("Oops... an error occured while deleting a movie");
      res.render('movies/index');
    })
})

// EDITING MOVIES
// GET the editing page
router.get("/movies/show/:id/edit", (req, res) => {
    movieModel
    .findById(req.params.id)
    .then(dbRes => {
        res.render("movies/edit", {movie: dbRes});
    })
    .catch(dbErr => {
        console.error("ERROR", dbErr);
        res.send("Oops... an error occured while accessing the edit celebrity page");
        res.render("celebrities/index");
    })
});

// EDIT the movie
router.post("/movies/show/:id", (req, res) => {
    const {title, genre, plot} = req.body
    movieModel
    .findByIdAndUpdate(req.params.id, {
        title,
        genre,
        plot
    })
    .then(dbRes => {
        res.redirect("/movies/index")
    })
    .catch(dbErr => {
        console.error("ERROR", dbErr);
        res.send("Oops... an error occured while editing the movie");
        res.render("movies/index");
    })
})


module.exports = router;