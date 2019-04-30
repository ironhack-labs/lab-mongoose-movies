const express = require("express");
const router = express.Router();
const Celebs = require(`../models/models`);
const Movies = require(`../models/models`);

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  console.log(`Went to Celebrities page`);
  Celebs.find().then(celebArray => {
    console.log(celebArray);
    res.render("Celebrities/celebrities", { celebArray });
  });
});

//Celeb Details Page
router.get("/celebrities/details", (req, res, next) => {
  console.log(`Went to Details page`, req.query);
  Celebs.findOne({ _id: req.query.id }).then(celebsID => {
    console.log(celebsID);
    res.render("Celebrities/details", { celebsID });
  });
});

router.get("/celebrities/new", (req, res, next) => {
  console.log(`Went to Celebrities page`);
  Celebs.find().then(celebArray => {
    console.log(celebArray);
    res.render("Celebrities/new");
  });
});

//New Celeb Post
router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebs({ name, occupation, catchPhrase });
  newCeleb
    .save()
    .then(updatedCeleb => {
      console.log("updatedCeleb", updatedCeleb);
      res.redirect("/Celebrities/new");
    })
    .catch(error => {
      console.log(error);
    });
});

//Delete Celeb
router.post("/celebrities/delete/:id", (req, res, next) => {
  console.log("Deleted a celeb.");
  Celebs.findOneAndDelete({ _id: req.params.id }).then(celebsID => {
    console.log(celebsID);
    res.redirect("/celebrities");
  });
});

// ====================== MOVIES =============================
//Movies Page
router.get("/movies", (req, res, next) => {
  console.log(`Went to Movies page`);
  Movies.find().then(movieArray => {
    console.log(movieArray);
    res.render("Movies/movies", { movieArray });
  });
});

//Movie Details Page
router.get("/movies/details", (req, res, next) => {
  console.log(`Went to Details page`, req.query);
  Movies.findOne({ _id: req.query.id }).then(movieID => {
    console.log(movieID);
    res.render("Movies/details", { movieID });
  });
});

//New Movies Page
router.get("/movies/new", (req, res, next) => {
  console.log(`Went to new movies page`);
  Movies.find().then(movieArray => {
    console.log(movieArray);
    res.render("Movies/new");
  });
});

//New Movie Post
router.post("/movies/new", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movies({ title, genre, plot });
  newMovie
    .save()
    .then(updatedMovie => {
      console.log("updatedMovie", updatedMovie);
      res.redirect("/Movies/new");
    })
    .catch(error => {
      console.log(error);
    });
});

//Delete Movie
router.post("/movies/delete/:id", (req, res, next) => {
  console.log("Deleted a movie.");
  Movies.findOneAndDelete({ _id: req.params.id }).then(moviesID => {
    console.log(moviesID);
    res.redirect("/movies");
  });
});

module.exports = router;
