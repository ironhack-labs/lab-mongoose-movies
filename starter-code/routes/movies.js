const express = require('express');

const Movie = require('../model/Movie.model');

const router = express.Router();

router.get('/', (req, res) => {
    Movie.find()
      .then(allmoviesFromDB => {
        console.log(allmoviesFromDB);
        res.render('movies/movies-list', { movies: allmoviesFromDB });
      })
      .catch(err =>
        console.log(`Err while getting the movies from the  DB: ${err}`)
      );
  });

router.get('/new', (req, res) => res.render('movies/movie-new.hbs'));


router.post('/new', (req, res) => {
  const { title, genre, plot } = req.body;

  Movie.create({ title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(error => `Error while creating a new Movie: ${error}`);
});

router.post('/:id/delete', (req, res) => {
  const { id } = req.params;

  Movie.findByIdAndDelete(id)
    .then(() => res.redirect('/movies'))
    .catch(error => console.log(`Error while deleting a Movie: ${error}`));
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  Movie.findById(id)
    .then(Movie => res.render('movies/movie-info', { Movie }))
    .catch(error => console.log('Error while retrieving Movie details: ', error));
});


router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(MovieToEdit => {
      res.render('movies/Movie-edit', MovieToEdit);
    })
    .catch(error =>
      console.log(`Error while getting a single Movie for edit: ${error}`)
    );
});

router.post('/:id/edit', (req, res) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;

  Movie.findByIdAndUpdate(
    id,
    { title, genre, plot },
    { new: true }
  )
    .then(updatedMovie => res.redirect(`/movies/${updatedMovie._id}`))
    .catch(error =>
      console.log(`Error while updating a single Movie: ${error}`)
    );
});

module.exports = router;
