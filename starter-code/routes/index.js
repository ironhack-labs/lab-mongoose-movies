const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(celebrities => {
    console.log("found: ", celebrities);
    res.render('celebrities', { celebrities })
  })
  .catch(error => console.log(error));
})

router.get('/celebrities/show/:id', (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    console.log(celebrity);
    res.render('celebrities/show', { celebrity });
  })
  .catch(err => console.log('Could not get celebrity details: ', err));
})

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');

})

router.post('/celebrities', (req, res) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(celeb => {
    res.redirect('/celebrities');
  })
  .catch(err => console.log("error while adding a celebrity: ", err));
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id).then(() => {
    console.log("Success");
    res.redirect('/celebrities');
  })
  .catch((err) => {
    console.log("error deleting celebrity: ", err);
    next();
  });
})


router.get('/celebrities/edit', (req, res) => {
  Celebrity.findById(req.query.celeb_id).then(celeb => {
    console.log(celeb);
    res.render('celebrities/edit', { celeb });
  }).catch((error) => {
    console.log(error);
  });
})

//.populate("author") -- look at Montasar's example in w5d1 or here http://learn.ironhack.com/#/learning_unit/6495

router.post('/celebrities/edit', (req, res) => {
  let { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.query.celeb_id, { name, occupation, catchPhrase })
  .then((celeb) => {
    res.redirect('/celebrities/show/' + celeb._id);
  })
  .catch((error) => {
    console.log(error);
  });
})


// movie routes

router.get('/movies', (req, res, next) => {
  Movie.find({})
  .then(movies => {
    res.render('movies', { movies })
  })
  .catch(error => console.log(error));
})

router.get('/movies/show/:id', (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render('movies/show', { movie });
  })
  .catch(err => console.log('Could not get movie details: ', err));
})

router.get('/movies/new', (req, res) => {
  res.render('movies/new');
})

router.post('/movies', (req, res) => {
  let { title, genre, plot } = req.body;
  Movie.create({ title: title, genre: genre, plot: plot}).then(movie => {
    res.redirect('/movies');
  })
  .catch(err => console.log("error while adding a movie: ", err));
})

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id).then(() => {
    console.log("Success");
    res.redirect('/movies');
  })
  .catch((err) => {
    console.log("error deleting movie: ", err);
    next();
  });
})


router.get('/movies/edit/:id', (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render('movies/edit', { movie });
  }).catch((error) => {
    console.log('error editing a movie: ', error);
  });
})

//.populate("author") -- look at Montasar's example in w5d1 or here http://learn.ironhack.com/#/learning_unit/6495

router.post('/movies/edit/:id', (req, res) => {
  let { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(req.params.id, { title, genre, plot })
  .then((movie) => {
    res.redirect('/movies/show/' + movie._id);
  })
  .catch((error) => {
    console.log(error);
  });
})


module.exports = router;
