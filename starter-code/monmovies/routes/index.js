const express = require("express");
const router = express.Router();
const Celeb = require("../models/celebrity");
const Movie = require("../models/movie");


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Celebs by Jason" });
});

/* GET Celeb LIST */
router.get("/celebrities", (req, res, next) => {
  Celeb.find({}).then(data => {
    // console.log(data)
    res.render("celebrities", { data, title: "Celebrities by Jason" });
  });
});

// Get MOVIE LIST
router.get("/movies", (req, res, next) => {
  Movie.find({}).then(data => {
    console.log(data)
    res.render("movielist", { data, title: "List of freaking movies" });
  });
});

/* Get Specific Celeb Page by ID */
router.get("/celebrities/:id", (req, res, next) => {
  Celeb.findById(req.params.id)
    .then(data => {
      res.render("show", { data, title: "All about..." });
    })
    .catch(console.error);
});

// Get Specific Movie Page by ID 
router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
  .then(data => {
      res.render("movie-show", { data, title: "All about..."});
    })
    .catch(console.error);
});

/* Create New celebrities */

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  new Celeb({
    name,
    occupation,
    catchPhrase
  })
    .save()
    .then(data => {
      res.render("show", { data, new: true });
    });
});

/* Create New MOVIES */

router.get("/newmovie", (req, res) => {
  res.render("newmovie");
});

router.post("/newmovie", (req, res) => {
  const { title, genre, plot } = req.body;
  new Movie({
    title,
    genre,
    plot,
  })
    .save()
    .then(() => {
      res.redirect("/movies");
    });
});

/* Delete A Celebrity */
router.post("/celebrities/:id/delete", (req, res) => {
  Celeb.findByIdAndRemove(req.params.id)
    .then(result => {
      res.redirect("/celebrities");
    })
    .catch(console.error);
});

// Delete A MOVIE
router.post("/movies/:id/delete", (req, res) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(result => {
      res.redirect("/movies");
    })
    .catch(console.error);
});

/* Update a Celebrity */
router.get("/celebrities/:id/edit", (req, res, next) => {
  Celeb.findById(req.params.id)
    .then(data => {
      res.render("edit", { data});
    })
    .catch(console.error);
});

router.post("/celebrities/:id/edit", (req, res) => {
  const { id } = req.params
  const {
    name,
    occupation,
    catchPhrase
  } = req.body

  Celeb.findByIdAndUpdate(
    id,
    {
      name,
      occupation,
      catchPhrase
    },{new: true }
  ).then(result=> {
    res.render("show", { result, updated: true });
  });
});


module.exports = router;
