const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

router.get("/celebrities", (req, res, next) => {
  console.log("pooop", Celebrity.find());
  Celebrity.find()
    .then(celebrities => {
      res.render("../views/celebrities/index.hbs", {
        theCelebrities: celebrities
      });
    })
    .catch(err => {
      next(err);
      console.log(err);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebritydeets => {
      res.render("../views/celebrities/show", { theCeleb: celebritydeets });
    })
    .catch(err => {
      next(err);
      console.log(err);
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity
    .save()
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

// router.get('/celebrities/edit', (req, res, next) => {
//   Celebrity.findOne({ _id: req.query.book_id })
//     .then(book => {
//       res.render('book-edit', { book });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      // console.log("movies: ", allMovies);
      res.render("movies/index", {
        Movie: allMovies
      });
    })
    .catch(err => console.log(err));
});

router.get("/addMovie", (req, res, next) => {

  // find all celebs ad pass them all into the view so you can loop over them
Celebrity.find()
.then(allCelebs =>{
  console.log("celebs:", allCelebs)
  res.render("movies/new.hbs", { celebrities: allCelebs});
})
  .catch(err => console.log(err));
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovies => {
      res.render("movies/show", { movieDeats: theMovies });
    })
    .catch(err => console.log(err));
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => console.log(err));
});

router.post("/movies", (req, res, next) => {
  const { title, genre, celebrity, plot } = req.body;
  const newMovie = new Movie({ title, genre, celebrity, plot });
  newMovie
    .save()
    .then(() => {
      res.redirect("/movies");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
