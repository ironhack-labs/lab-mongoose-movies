// const express = require("express");
// const router = express.Router();
// const Celebrity = require("../models/celebrity");

// /* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });

// router.get("/celebrities", (req, res, next) => {
//   Celebrity.find()
//     .then(celebrities => {
//       console.log(celebrities);
//       res.render("../views/celebrities/index.hbs", { celebrities });
//     })
//     .catch(err => {
//       console.log("error!!!! --->", err);
//     });
// });

// router.get("/celebrities/detail/:celebrities_id", (req, res, next) => {
//   Celebrity.findById(req.params.celebrities_id)
//     .then(celebrity => {
//       console.log("It worked");
//       res.render("celebrities/show.hbs", { celebrity });
//     })
//     .catch(error => {
//       console.log("Error");
//       console.log(error);
//     });
// });

// router.get("/celebrities/new", (req, res, next) => {
//   res.render("celebrities/new.hbs");
// });

// router.post("/celebrities/new", (req, res, next) => {
//   const { name, occupation, catchPhrase } = req.body;
//   const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
//   newCelebrity
//     .save() //call to data base
//     .then(celebrity => {
//       console.log("saved!", celebrity);
//       res.redirect("/celebrities");
//     })
//     .catch(error => {});
// });

// router.get("/celebrities/delete", (req, res, next) => {
//   console.log(req.query);
//   Celebrity.findByIdAndDelete(req.query.celebrities_id).then(deletedThing => {
//     console.log("deleted!!!!!!!!!");
//     res.redirect("/celebrities");
//   });
// });

// router.get("/celebrities/edit", (req, res, next) => {
//   Celebrity.findOne({ _id: req.query.celebrities_id })
//     .then(celebrities => {
//       res.render("celebrities/edit", { celebrities  });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// router.post("/celebrities/edit", (req, res, next) => {
//   const { name, occupation, catchPhrase } = req.body;
//   Celebrity.update({ _id: req.query.celebrities_id }, { $set: { name, occupation, catchPhrase } })
//     .then(celebrity => {
//       res.redirect("/celebrities/show");
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// module.exports = router;

/*************************************************************************************
 *                                 MOVIES!!!!
 *************************************************************************************/

const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log(movies);
      res.render("../views/movies/index.hbs", { movies });
    })
    .catch(err => {
      console.log("error!!!! --->", err);
    });
});

router.get("/movies/detail/:movies_id", (req, res, next) => {
  Movie.findById(req.params.movies_id)
    .then(movie => {
      console.log("It worked");
      res.render("movies/show.hbs", { movie });
    })
    .catch(error => {
      console.log("Error");
      console.log(error);
    });
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new.hbs");
});

router.post("/movies/new", (req, res, next) => {
  const { title, year, director, duration, genre, rate } = req.body;
  const newMovie = new Movie({ title, year, director, duration, genre, rate });
  newMovie
    .save() //call to data base
    .then(movie => {
      console.log("saved!", movie);
      res.redirect("/movies");
    })
    .catch(error => {});
});

router.get("/movies/delete", (req, res, next) => {
  console.log(req.query);
  Movie.findByIdAndDelete(req.query.movies_id).then(deletedThing => {
    console.log("deleted!!!!!!!!!");
    res.redirect("/movies");
  });
});

router.get("/movies/edit", (req, res, next) => {
  Movie.findOne({ _id: req.query.movies_id })
    .then(movies => {
      res.render("movies/edit", { movies });
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/movies/edit", (req, res, next) => {
  const { title, year, director, duration, genre, rate } = req.body;
  console.log("in here", req.body, req.query);
  Movie.update({ _id: req.query.movies_id }, { $set: { title, year, director, duration, genre, rate } })
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
