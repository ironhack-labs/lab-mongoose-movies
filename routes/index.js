const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities", { celebrities });
    })
    .catch(error => {
      console.log(error);
    })
});
router.get('/celebrity/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  console.log(celebrityId);
  Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
      res.render("celebrity-detail", { celebrity });
    })
    .catch(error => {
      console.log(error)
    });
});
router.get('/celebrities/add', (req, res, next) => {
  res.render("celebrity-add");
});
router.post('/celebrities/add', (req, res, next) => {
  const { name, occupation, catchPhrase, img } = req.body;
  const newBook = new Book({ name, occupation, catchPhrase, img });
  newCelebrity.save()
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  });
});
router.get('/celebrities/edit', (req, res, next) => {
  Celebrity.findOne({_id: req.query.celebrity_id})
  .then((celebrity) => {
    res.render("celebrity-edit", {celebrity});
  })
  .catch((error) => {
    console.log(error);
  });
});
router.post('/celebrities/edit', (req, res, next) => {
  const { name, occupation, catchPhrase, img } = req.body;
  Celebrity.update({ _id: req.query.celebrity_id}, { $set: { name, occupation, catchPhrase, img } },
                   { new: true })
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  });
});
router.get('/celebrities/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({_id: req.query.celebrity_id}, (err, celebrity) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Celebridad eliminada exitosamente",
      id: celebrity._id
    };
    return res.redirect('/celebrities');

  });
});


router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      console.log(error)
    })
});
router.get('/movie/:id', (req, res, next) => {
  let movieId = req.params.id;
  console.log(movieId);
  Movie.findOne({'_id': movieId})
    .then(movie => {
      console.log(movie);
      res.render("movie-detail", { movie });
    })
    .catch(error => {
      console.log(error)
    });
});
router.get('/movies/add', (req, res, next) => {
  res.render("movie-add");
});
router.post('/movies/add', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie.save()
  .then((movie) => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  });
});
router.get('/movies/edit', (req, res, next) => {
  Movie.findOne({_id: req.query.movie_id})
  .then((movie) => {
    res.render("movie-edit", {movie});
  })
  .catch((error) => {
    console.log(error);
  });
});
router.post('/movies/edit', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.update({ _id: req.query.movie_id}, { $set: { title, genre, plot } },
               { new: true })
  .then((movie) => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  });
});
router.get('/movies/delete', (req, res, next) => {
  Movie.findByIdAndRemove({_id: req.query.movie_id}, (err, movie) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Pelicula eliminada exitosamente",
      id: movie._id
    };
    return res.redirect('/movies');
  });
});

module.exports = router;
