const express = require('express');
const router = express.Router();
const Celebrities = require("../Models/Celebrity");
const Movies = require("../Models/Movies");
const bodyParser = require('body-parser');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//celebrities routes

router.get('/celebrities', (req, res, next) => {
  Celebrities.find()
    .then(celebrityInDB => {
      console.log(celebrityInDB)
      res.render('celebrities/index', {
        celebrityInDB
      });
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity)
      res.render('celebrities/show',
        celebrity
      );
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  Celebrities.updateOne({
      _id: req.params.id
    }, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase

    })
    .then(() => {
      res.redirect("/");
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
})

router.post("/celebrities", (req, res) => {
  Celebrities.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    }).then(() => {
      res.redirect("/");
    })
    .catch(error => {
      res.redirect("/celebrities/new");
      console.log(error)
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrities.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity)
      res.render('celebrities/edit',
        celebrity
      );
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

//movies routes

router.get('/movies', (req, res, next) => {
  Movies.find()
    .then(movieInDB => {
      console.log(movieInDB)
      res.render('movies/index', {
        movieInDB
      });
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get('/movies/:id', (req, res, next) => {
  Movies.findById(req.params.id)
    .then(movie => {
      console.log(movie)
      res.render('movies/show',
        movie
      );
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.post("/movies/:id", (req, res, next) => {
  Movies.updateOne({
      _id: req.params.id
    }, {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot

    })
    .then(() => {
      res.redirect("/");
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
})

router.post("/movies", (req, res) => {
  Movies.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    }).then(() => {
      res.redirect("/");
    })
    .catch(error => {
      res.redirect("/movies/new");
      console.log(error)
    });
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movies.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get('/movies/:id/edit', (req, res, next) => {
  Movies.findById(req.params.id)
    .then(movie => {
      console.log(movie)
      res.render('movies/edit',
        movie
      );
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

module.exports = router;