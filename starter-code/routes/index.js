const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find(
    req.query.name
      ? {
          name: { $regex: req.query.name, $options: "i" },
        }
      : {}
  )
  .then((celebrities) => {
    const results = celebrities.length;
    res.render('../views/celebrities/index', {celebrities: celebrities, celebrity_search: req.query.name, results: results});
  })
  .catch((e) => next(e));
})


router.get('/movies', (req, res, next) => {
  Movie.find(
    req.query.title
      ? {
          title: { $regex: req.query.title, $options: "i" },
        }
      : {}
  )
  .then((movies) => {
    const results = movies.length;
    res.render('../views/movies/index', {movies: movies, movie_search: req.query.title, results: results});
  })
  .catch((e) => next(e));
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrity = req.body;
  Celebrity.findOneAndRemove({ _id: celebrity._id })
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch((e) => next(e));
})

router.post('/movies/:id/delete', (req, res, next) => {
  const movie = req.body;
  Movie.findOneAndRemove({ _id: movie._id })
  .then(() => {
    res.redirect('/movies');
  })
  .catch((e) => next(e));
})

router.post('/celebrities/:id', (req, res, next) => {
  const celebrity = req.body;
  Celebrity.findByIdAndUpdate(req.body._id, celebrity, { new: true })
  .then((c) => {
    let route = '/celebrities/'+celebrity._id;
    return route
  })
  .then((route) => {
    res.redirect(route);
  })
  .catch((e) => next(e));
})

router.post('/movies/:id', (req, res, next) => {
  const movie = req.body;
  Movie.findByIdAndUpdate(req.body._id, movie, { new: true })
  .then((c) => {
    let route = '/movies/'+movie._id;
    return route
  })
  .then((route) => {
    res.redirect(route);
  })
  .catch((e) => next(e));
})

router.post('/celebrities', (req, res, next) => {
  const celebrity = req.body;
  Celebrity.create(celebrity)
  .then(() => {
    return Celebrity.find({name: req.body.name})
    })
  .then((c) => {
    let route = '/celebrities/'+c[0]._id;
    return route
  })
  .then((route) => {
    res.redirect(route);
  })
  .catch((e) => next(e));
})

router.post('/movies', (req, res, next) => {
  const movie = req.body;
  Movie.create(movie)
  .then(() => {
    return Movie.find({title: req.body.title})
    })
  .then((m) => {
    let route = '/movies/'+m[0]._id;
    return route
  })
  .then((route) => {
    res.redirect(route);
  })
  .catch((e) => next(e));
})

router.get('/celebrities/new', (req, res, next) => {
  res.render('../views/celebrities/new')
})

router.get('/movies/new', (req, res, next) => {
  res.render('../views/movies/new')
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrity) => {
    res.render('../views/celebrities/edit', {celebrity});
  })
  .catch((e) => next(e));
})

router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movie) => {
    res.render('../views/movies/edit', {movie});
  })
  .catch((e) => next(e));
})

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrity) => {
    res.render('../views/celebrities/show', {celebrity});
  })
  .catch((e) => next(e));
})

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movie) => {
    res.render('../views/movies/show', {movie});
  })
  .catch((e) => next(e));
})

module.exports = router;
