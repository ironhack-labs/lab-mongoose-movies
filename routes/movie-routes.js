const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(allTheMovies => {
      res.render("movie-views/index", { movies: allTheMovies });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/details/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id)
    .then(movieObject => {
      console.log(movieObject.image);
      res.render("movie-views/show", { movie: movieObject });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/add-new-movie", (req, res, next) => {
  res.render("movie-views/new");
});

router.post("/movies/creation", (req, res, next) => {
  let name = req.body.theName;
  let occupation = req.body.theOccupation;
  let catchPhrase = req.body.theCatchPhrase;
  let image = req.body.theImage;

  Movie.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
    image: image,
  })
    .then(result => {
      res.redirect("/movies/details/"+ result._id);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies/delete/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findByIdAndRemove(id)
  .then((result)=>{
    res.redirect('/movies');
  }).catch((err)=>{
    next(err);
  })
});

router.get("/movies/edit-movie/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id)
  .then((theMovie) => {
    res.render("movie-views/edit", {movie: theMovie})
  })
  .catch((err) => {
    next(err);
  })
});

router.post("/movies/update/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findByIdAndUpdate(id, {
    name: req.body.theTitle,
    occupation: req.body.theAuthor,
    catchPhrase: req.body.theCatchPhrase,
    image: req.body.theImage,
  })
  .then((result) => {
    res.redirect("/movies/details/"+id)
  })
  .catch((err) => {
    next(err);
  })
})

module.exports = router;
