const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity");

const Movie = require("../models/Movie");

// Base URL

router.get("/", (req, res, next) => {
  res.redirect("/celebs");
});

// GET all celebrities

router.get("/celebs", (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      console.log("celebs fetched: ", celebrities);
      res.render("celebs", { celebs: celebrities });
    })
    .catch(err => {
      console.log("ERR: /celebs: ", err);
    });
});

// GET One Celeb to edit

router.get("/edit-celeb/:celebId", (req, res, next) => {
  let celebId = req.params.celebId;
  console.log("editing: ", celebId);
  Celebrity.findById(celebId)
    .then(celebrity => {
      console.log("celeb fetched to edit: ", celebrity);
      res.render("edit-celeb", { celeb: celebrity });
    })
    .catch(err => {
      console.log("ERR:  GET: /celeb-edit: ", err);
    });
});

// POST One Celeb to apply changes

router.post("/edit-celeb/:celebId", (req, res, next) => {
  console.log(req.body);
  let celebId = req.params.celebId;
  Celebrity.updateOne(
    { _id: celebId },
    {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    }
  )
    .then(celebrity => {
      console.log("POST /edit-celeb:", celebrity);
      res.redirect("/celebs");
    })
    .catch(err => {
      console.log("ERR:  POST: /celeb-edit: ", err);
    });
});

// POST Upvote one Celeb +1 Heart

router.post("/up-vote/:celebId", (req, res, next) => {
  console.log(req.body);
  let celebId = req.params.celebId;
  Celebrity.updateOne({ _id: celebId }, { $inc: { upVotes: 1 } })
    .then(celebrity => {
      console.log("POST /up-vote:", celebrity);
      res.redirect("/celebs");
    })
    .catch(err => {
      console.log("ERR:  POST: /celeb-edit: ", err);
    });
});

// GET Add a Celeb Page

router.get("/add-celeb", (req, res, next) => {
  res.render("add-celeb");
});

// POST Create a new Celeb

router.post("/add-celeb", (req, res, next) => {
  console.log(req.body);
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(celebrity => {
      console.log("POST /add-celeb:", celebrity);
      res.redirect("/celebs");
    })
    .catch(err => {
      console.log("ERR:  POST: /add-edit: ", err);
    });
});

// GET Delete a Celeb Page

router.get("/delete-celeb/:celebId", (req, res, next) => {
  let celebId = req.params.celebId;
  console.log("editing: ", celebId);
  Celebrity.findById(celebId)
    .then(celebrity => {
      console.log("celeb fetched to delete: ", celebrity);
      res.render("delete-celeb", { celeb: celebrity });
    })
    .catch(err => {
      console.log("ERR:  GET: /celeb-edit: ", err);
    });
});

router.post("/delete-celeb/:celebId", (req, res, next) => {
  let celebId = req.params.celebId;
  console.log("editing: ", celebId);
  Celebrity.findByIdAndDelete(celebId)
    .then(celebrity => {
      console.log("celeb deleted: ", celebrity);
      res.redirect("/celebs");
    })
    .catch(err => {
      console.log("ERR:  GET: /celeb-edit: ", err);
    });
});

// Movie Routes

// GET Show Movies

router.get("/celeb-movies/:celebId", (req, res, next) => {
  let celebId = req.params.celebId;

  // Promise.all takes as a parameter an array of promises
  Promise.all([Movie.find({ _celeb: celebId }), Celebrity.findById(celebId)])
    .then(([movies, celeb]) => {
      res.render("celeb-movies", { celeb, movies });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/add-movie/:celebId", (req, res, next) => {
  let celebId = req.params.celebId;

  res.render("add-movie", { celebId });
});

router.post("/add-movie", (req, res, next) => {
  console.log("req.body", req.body);
  Movie.create({
    _celeb: req.body.celebId,
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot

  })
    .then(movie => {
      console.log("POST /add-movie:", movie);
      res.redirect("/celeb-movies/" + req.body.celebId);
    })
    .catch(err => {
      console.log("ERR:  POST: /add-edit: ", err);
    });
});


router.get("/delete-movie/:movieId", (req, res, next) => {
  let movieId = req.params.movieId;
  console.log("deleting: ", movieId);
  Movie.findById(movieId)
    .then(movie => {
      console.log("movie fetched to delete: ", movie);
      res.render("delete-movie", { movie: movie });
    })
    .catch(err => {
      console.log("ERR:  GET: /celeb-edit: ", err);
    });
});






router.post("/delete-movie/:movieId", (req, res, next) => {
  let movieId = req.params.movieId;
  console.log("deleted: ", movieId);
  Movie.findById(movieId)
  .then( movie => {
    let celebId = movie._celeb;
  Movie.findByIdAndDelete(movieId)
    .then(movie => {
      console.log("movie deleted: ", movie);
      res.redirect("/celeb-movies/" + celebId);
    })
    .catch(err => {
      console.log("ERR:  POST: /movie-delete: ", err);
    });
  })

});


// GET One Celeb to edit

router.get("/edit-movie/:movieId", (req, res, next) => {
  let movieId = req.params.movieId;
  console.log("editing: ", movieId);
  Movie.findById(movieId)
    .then(movie => {
      console.log("movie fetched to edit: ", movie);
      res.render("edit-movie", { movie: movie });
    })
    .catch(err => {
      console.log("ERR:  GET: /movie-edit: ", err);
    });
});

// POST One Celeb to apply changes

router.post("/edit-movie/:movieId", (req, res, next) => {
  console.log(req.body);
  let movieId = req.params.movieId;
  Movie.updateOne(
    { _id: movieId },
    {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    })
    .then(movie => {
      console.log("POST /edit-movie:", movie);
      Movie.findById(movieId)
      .then(movie => {
        let celebId = movie._celeb
        res.redirect("/celeb-movies/" + celebId);
      })
    })
    .catch(err => {
      console.log("ERR:  POST: /celeb-edit: ", err);
    })
    });









module.exports = router;
