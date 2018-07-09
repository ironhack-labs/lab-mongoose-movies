const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* C(R)UD: Retrieve -> List all celebrities */

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({}).then(celebrities => {
    res.render("celebrities", { celebrities });
  });
});

/* (C)RUD: New celebrity form */
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrity/new");
});

/* (C)RUD: Create the celebrity in DB */
router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  new Celebrity({ name, occupation, catchPhrase }).save().then(celebrity => {
    console.log("Celebrity sucessfully created!");
    res.redirect("/celebrities");
  });
});

/* CR(U)D: Update the celebrity, show update form  */
router.get("/celebrities/edit/:id", (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrity/edit", { celebrity });
  });
});

/* CR(U)D: Update the celebrity in DB */
router.post("/celebrities/edit/:id", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, {
    name,
    occupation,
    catchPhrase
  }).then(celebrity => {
    res.redirect("/celebrities");
  });
});

/* CRU(D): Update the celebrity in DB */
router.get("/celebrities/delete/:id", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id, () =>
    res.redirect("/celebrities")
  );
});

/* C(R)UD: Retrieve -> Single celebrity */

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("show", { celebrity });
  });
});

// MOVIES CRUD


/* C(R)UD: Retrieve -> List all movies */

router.get("/movies", (req, res, next) => {
  Movie.find({}).then(movies => {
    res.render("movies", { movies });
  });
});

/* (C)RUD: New movie form */
router.get("/movies/newMovie", (req, res, next) => {
  res.render("movie/newMovie");
});

/* (C)RUD: Create the movie in DB */
router.post("/movies/newMovie", (req, res, next) => {
  const {title,genre,plot} = req.body;
  new Movie({title,genre,plot}).save().then(celebrity => {
    console.log("Movie sucessfully created!");
    res.redirect("/movies");
  });
});

/* CR(U)D: Update the movie, show update form  */
router.get("/movies/editMovie/:id", (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movie/editMovie", { movie });
  });
});

/* CR(U)D: Update the movie in DB */
router.post("/movies/editMovie/:id", (req, res) => {
  const {title,genre,plot} = req.body;
  Movie.findByIdAndUpdate(req.params.id, {title,genre,plot}).then(movie => {
    res.redirect("/movies");
  });
});

/* CRU(D): Update the movie in DB */
router.get("/movies/delete/:id", (req, res) => {
  Movie.findByIdAndRemove(req.params.id, () =>
    res.redirect("/movies")
  );
});


/* C(R)UD: Retrieve -> Single movie */
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("showMovie", { movie });
  });
});















module.exports = router;
