const express = require('express');
const router  = express.Router();
const MovieModel = require('./../models/Movie.model')
const CelebrityModel = require('./../models/Celebrity.model')

/* GET home page */
router.get('/', async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    res.render('movies/movies', {movies});
  } catch(err) {
      next(err)
  }
});

router.get('/new', async (req, res, next) => {
    try {
      const celebrity = await CelebrityModel.find()
      res.render('movies/movie-new', {celebrity})
    } catch(err) {
        next(err)
    }
  });

  router.post('/create', async (req, res, next) => {
     
    try {
      await MovieModel.create(req.body)
      res.redirect('/movies');
    } catch(err) {
        res.redirect('movies/new');
        next(err)
    }
  });

  router.get('/:id/delete', async (req, res, next) => {
    try {
      await MovieModel.findByIdAndRemove(req.params.id);
      res.redirect('/movies');
    } catch(err) {
        next(err)
    }
  });

  router.get('/:id/edit', async (req, res, next) => {
    try {
      const celebrity = await CelebrityModel.find() 
      const movie = await MovieModel.findById(req.params.id);
      res.render('movies/movie-edit', {movie, celebrity} );
    } catch(err) {
        next(err)
    }
  });

  router.post('/:id', async (req, res, next) => {
    try {
      const movie = await MovieModel.findByIdAndUpdate(req.params.id, req.body);
      res.redirect(`/movies/${req.params.id}`);
    } catch(err) {
        next(err)
    }
  });


router.get('/:id', async (req, res, next) => {
    try {
      const movie = await MovieModel.findById(req.params.id).populate('cast');
      console.log(movie)
      res.render('movies/movie-details', movie);
    } catch(err) {
        next(err)
    }
  });



module.exports = router;
