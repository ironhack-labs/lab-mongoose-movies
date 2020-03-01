const mongoose = require("mongoose");
const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity.js")
const Movie = require("../models/movie.js")
const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}'`);


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/index', {celebrities: celebrities})
  })
  .catch((err) => console.log("error: ", err))
});


router.get('/celebrities/:movie/:id', (req, res, next) => {
  let movieid = req.params.movie;
  let id = req.params.id;
  let backlink = "movies/" + movieid;
  console.log("Clicked on celebrities. Backlink is:", backlink);
  Celebrity.findById(id)
    .then((celeb) => {
    res.render('celebrities/show', {celeb: celeb, backlink: backlink})
  })
  .catch((err) => console.log("error: ", err))
})

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {
  let backlink = "celebrities"
  console.log("Clicked on celebrities. Backlink is:", backlink)
  let id = req.params.id;
  if (id === "new") {
    res.render('celebrities/new');
  }
  else Celebrity.findById(id)
    .then((celeb) => {
    res.render('celebrities/show', {celeb: celeb, backlink: backlink})
  })
  .catch((err) => console.log("error: ", err))
})

router.post('/celebrities', (req, res, next) => {
  var newCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  Celebrity.create(newCeleb)
  .then(celeb => {
    res.render('celebrities/success', {celeb: celeb});

  })
});

router.post('/celebrities/:id', (req, res, next) => {
  let id = req.params.id;
  let newCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  Celebrity.findByIdAndUpdate(id, newCeleb)
  .then(celeb => {
    res.render('celebrities/edit-success', {celeb: celeb});
  })
  .catch(error => console.log("error: ", error))
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  let id = req.params.id;
  Celebrity.findByIdAndRemove(id)
  .then(res.render('index'))
  .catch(error => console.log("error: ", error))
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id)
  .then(celeb => {
    res.render('celebrities/edit', {celeb: celeb});
  })
  .catch(err => {
    console.log("error: ", error)
  })
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    console.log("Movies:", movies)
    res.render('movies/index', {movies: movies})
  })
  .catch((err) => console.log("error: ", err))
});

module.exports = router;

router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id;
  if (id === "new") {
    Celebrity.find()
    .then(celebs => {
      res.render('movies/new', {celebs: celebs});
    })
    
  }
  else Movie.findById(id)
    .populate('actors', 'name')
    .then((movie) => {console.log("movie is", movie)
    
    res.render('movies/show', {movie: movie})
  })
  .catch((err) => console.log("error: ", err))
})

router.get('/movies/:id/edit', (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id)
  .populate('actors', 'name')
  .then(movie => {
    Celebrity.find()
    .then(celebs => {
      res.render('movies/edit', {movie: movie, celebs: celebs});
    })
    
  })
  .catch(err => {
    console.log("error: ", error)
  })
});

router.post('/movies/:id/delete', (req, res, next) => {
  let id = req.params.id;
  Movie.findByIdAndRemove(id)
  .then(res.render('index'))
  .catch(error => console.log("error: ", error))
});

router.post('/movies/:id', (req, res, next) => {
  let id = req.params.id;
  let newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    actors: req.body.actors
  }
  Movie.findByIdAndUpdate(id, newMovie)
  .populate('actors', 'name')
  .then(movie => {
    res.render('movies/edit-success', {movie: movie});
  })
  .catch(error => console.log("error: ", error))
});

router.post('/movies', (req, res, next) => {
  var newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    actors: req.body.actors
  }
  Movie.create(newMovie)
  .then(movie => {
    res.render('movies/success', {movie: movie});

  })
});