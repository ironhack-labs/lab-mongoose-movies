const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get(
  "/",
  (req, res, next) => {
    console.log("Reached Movie page");
    next();
  },
  (req, res, next) => {
    Movie.find()
      .then(moviez => {
        res.render("movies/index", { moviez });
      })
      .catch(e => next(e));
  }
);

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.get("/:id/edit", (req, res, next) => {
  const celebrities = Celebrity.find();
  const movies = Movie.findById(req.params.id).populate("celebrities");

  Promise.all([movies, celebrities])
    .then(result => {
      res.render("movies/edit", { movieEdit: result[0], celebrityEdit: result[1] });
    })
    .catch(e => next(e));
});

router.get("/:id", (req, res, next) => {
  const celebrities = Celebrity.find();
  const movies = Movie.findById(req.params.id).populate("celebrities");

    Promise.all([movies,celebrities])
    .then(result => {
      console.log(result[0])
      res.render("movies/show", { movieId: result[0], celebrityId: result[1] });
    })
    .catch(e => next(e));
});

router.post("/create", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({
    title,
    genre,
    plot
  })
    .then(mov => {
      console.log(`${mov} created.`);
      res.redirect("/movies");
    })
    .catch(e => next(e));
});

router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/movies"))
    .catch(e => next(e));
});

router.post("/:id", (req, res, next) => {
  const { title, genre, plot } = req.body;
  // Here the '_id' is necessary instead of 'id', otherwise it will not work..
  // Cat.updateOne({ _id: req.params.id }, { $push: { foods: req.body.foodId } });
  console.log(req.body.castId)
  Movie.updateOne({ _id: req.params.id }, { $set: { title, genre, plot } })
  Movie.updateOne({ _id: req.params.id }, { $push: { cast: req.body.castId } })
     .then(() => res.redirect("/movies"))
     .catch(e => next(e));
});

module.exports = router;
