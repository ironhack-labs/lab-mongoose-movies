const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies.js");

/* GET home page */

router.get("/", (req, res, next) => {
  res.redirect("/movies/index");
});

router.get("/index", (req, res, next) => {
  if (req.query.error) {
    Movies.find()
      .select({ title: 1 })
      .then(allMovies => {
        res.render("movies/index", {
          allMovies,
          error: "Something went wrong, please, try again"
        });
      })
      .catch(error => {
        res.json({ error: "Error while getting the movies from the DB" });
      });
  } else {
    Movies.find()
      .select({ title: 1 })
      .then(allMovies => {
        res.render("movies/index", { allMovies });
      })
      .catch(error => {
        res.json({ error: "Error while getting the movies from the DB" });
      });
  }
});
router.get("/movie/:id", (req, res, next) => {
  Movies.findById(req.params.id)
    .then(movie => {
      console.log(movie);
      res.render("movies/show", { movie });
    })
    .catch(error => {
      res.json({ error: "This movie was not found" });
    });
});

router.get("/new", (req, res, next) => {
  if (req.query.error) {
    res.render("movies/new", {
      error: "Something went wrong, please, try again"
    });
  } else {
    res.render("movies/new");
  }
});

router.post("/new", (req, res) => {
  Movies.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(createdMovie => {
      res.redirect("/movies/index");
    })
    .catch(error => {
      res.redirect("/movies/new?error=please-try-again");
    });
});

router.post("/delete", (req, res) => {
  Movies.findByIdAndDelete(req.body.id)
    .then(deletedMovie => {
      res.redirect("/movies/index");
    })
    .catch(error => {
      res.redirect("/movies/index?error=please-try-again");
    });
});

// Edit movie bonus. Not finished
// router.get("/:id/edit", (req, res) => {
//   Movies.find(req.query.id). then(foundMovie => {
//     res.render("/movie/edit", {foundMovie})
//   }) 
  
// })
// router.post("/:id/edit", (req, res) => {
//   Movies.findByIdAndUpdate(req.body._id, req.body).then(updatedMovie => {
//     res.redirect(`/movie/${req.body._id}`);
//   });
// });

module.exports = router;
