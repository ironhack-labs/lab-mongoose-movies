const express = require("express");
const router = new express.Router();
const Movies = require("../models/movies");
// Get all movies
router.get("/movies/index", (req, res) => {
  Movies.find({})
    .then((dbResult) => {
      res.render("movies/index", {
        movies: dbResult,
        // css: ["celebrities.css"],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Create a new movie

router.get("/movies/new", (req, res) => {
  res.render("movies/new.hbs");
});

router.post("/movies", (req, res) => {
  if (req.body.title === "" || req.body.genre === "" || req.body.plot === "") {
    res.render("movies/new", {
      error: "You have to enter all the fields...",
    });
  } else {
    Movies.create(req.body)
      .then((dbResult) => {
        Movies.find({})
          .then((dbResult) => {
            res.render("movies/index", {
              movies: dbResult,
              // css: ["foods.css"],
            });
          })
          .catch((err) => {
            console.log(err);
          });
        // res.redirect("/foods");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

// View movies
router.get("/movies/:id", (req, res) => {
  Movies.findById(req.params.id)
    .then((dbResult) => {
      res.render("movies/show", {
        movies: dbResult,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete Movies

router.post("/movies/:id/delete", (req, res, next) => {
  Movies.findByIdAndRemove(req.params.id)
    .then((dbResult) => {
      res.redirect("/movies/index");
    })
    .catch((err) => {
      console.log(err);
    });
});

// update Movies

router.get("/movies/:id/edit", (req, res) => {
  Movies.findById(req.params.id)
    .then((dbResult) => {
      res.render("movies/edit.hbs", {
        movies: dbResult,
        error: "",
        css: ["form.css"],
      });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

router.post("/movies/:id", (req, res) => {
  if (req.body.title === "" || req.body.genre === "" || req.body.plot === "") {
    Movies.findById(req.params.id)
      .then((dbResult) => {
        res.render("movies/edit.hbs", {
          movies: dbResult,
          error: "You have to enter all the fields...",
          // css: ["form.css"],
        });
      })
      .catch((dbErr) => {
        console.log(dbErr);
      });
  } else {
    Movies.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((dbResult) => {
        res.redirect("/movies/index");
      })
      .catch((dbErr) => {
        console.log(dbErr);
      });
  }
});

module.exports = router;
