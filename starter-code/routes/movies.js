const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movie => res.render('movies/index', {movie}))
    .catch(err => console.log('movie can not be found', err))
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

// router.get('/:id/edit', (req, res, next) => {
//   res.render('movies/edit');
// });

router.get('/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then(movie => res.render('movies/show', {movie}))
    .catch(err => console.log('Invalid ID', err))
});

// router.get('/:id/edit', (req, res, next) => {
//   const movieId = req.params.id;
//   Movie.findById(movieId)
//     .then(movie => {
//       console.log('Edit movie', movie);
//       res.render("movies/edit", { movie })
//     })
//     .catch(err => {
//       console.log("Couldn't go to edit place", err);
//       next();
//     });
// });

router.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({
    title,
    genre,
    plot
  })
    .then(() => {
      console.log(`Success! ${title} was created in the database!`);
      res.redirect(`/movies`);
    })
    .catch(err => {
      console.log('Invalid Movie', err);
      res.redirect("/new");
    });
});

router.post("/:id/delete", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
    .then(() => {
      console.log('Removed movie');
      res.redirect("/movies");
    })
    .catch(err => {
      console.log("Couldn't delete this movie, sorry" ,err);
      next();
    });
});

// router.post('/edit', (req, res, next) => {
//   const {title, genre, plot} = req.body;
//   Movie.findByIdAndUpdate(req.query.movieId, {$set: {title, genre, plot}}, {new: true})
//     .then(() => {
//       console.log('Updated movie', movie);
//       res.redirect('/movies/list');
//     })
//     .catch(err => {
//       console.log("Couldn't upadate movie", err);
//       next();
//     });
// });







module.exports = router;