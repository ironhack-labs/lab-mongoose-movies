const express = require('express');
const moviesModel = require('../models/movie');

const router = express.Router();

/* GET movies page */

router.get('/', (req, res, next) => {
  moviesModel.find()
    .then((movies) => {
      res.render('movies/movies', {
        movies,
      });
    })
    .catch((error) => {
      console.error(error);
      next(() => error);
    });
});

/* GET new movie */

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

/* POST new movie */

router.post('/', (req, res) => {
  console.log(req.body);
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };

  const newmovie = new moviesModel(movie);
  newmovie.save()
    .then(() => {
      console.log(`Succes adding ${movie.title}`);
      res.redirect('movies');
    })
    .catch((error) => {
      console.log('movie not saved', error);
      res.render('movies/new');
    });
});

/* GET movie page */

router.get('/:id', (req, res, next) => {
  const {
    id
  } = req.params;
  moviesModel.findById(id)
    .then((movie) => {
      res.render('movies/show', {
        movie,
      });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

/* GET edit movie */

router.get('/:id/edit', (req, res, next) => {
  const {
    id
  } = req.params;
  moviesModel.findById(id)
    .then((movie) => {
      res.render('movies/edit', {
        movie,
      });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

/* POST edit movie */

router.post('/:id', (req, res, next) => {
  const {
    id,
  } = req.params;

  const updatedmovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };

  moviesModel.findByIdAndUpdate(
    id,
    updatedmovie, {
      new: true,
    },
  )
    .then(() => res.redirect('/movies'))
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

/* POST delete movie */

router.post('/:id/delete', (req, res, next) => {
  const {
    id
  } = req.params;
  moviesModel.findByIdAndRemove(id)
    .then(() => res.redirect('/movies'))
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
