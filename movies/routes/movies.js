var express = require('express');
var router = express.Router();
const Movie = require('../models/movies');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Movie.find({},(error, movies) => {
    if(error){
      next(error);
    }else{
      console.log(movies);
      res.render('movies/index', { movies } );

    }
  });
});

router.post('/',(req,res)=>{
  let movies = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot

  };

  Movie.create(movies,(err, doc)=>{
    if (err){
      next(err);
    }else{
      res.redirect('/movies');
    }
  });
});

router.get('/new',(req,res) =>
{
  res.render('movies/new');
});


router.get('/:movieId', (req, res, next)=> {
  let movieId = req.params.movieId;

  Movie.findById(movieId, (err, movie) => {
    if (err) {
      next(err);
    } else {
      res.render('movies/show', {movie : movie} );
    }
  });
});


router.get('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id, (err, movie)=>{
    if (err) {
      next(err);
    } else {
      res.redirect('/movies');
    }
  });
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id, (err, movie)=>{
    if (err) {
      next(err);
    }else{
      res.render('movies/edit', { movie: movie });
    }
  });
});

router.post('/:id/update', (req, res, next) => {
  let movieToUpdate = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  Movie.findByIdAndUpdate(req.params.id, movieToUpdate, (err, movie)=>{
    if (err) {
      next(err);
    } else {
      res.redirect('/movies');
    }
  });
});





// router.get('/:movieId', (req, res, next)=> {
//   let movieId = req.params.movieId;
//
//   Movie.findById(movieId, (err, celebrity) => {
//     if (err) {
//       next(err);
//     } else {
//       res.render('movies/show', {movie : movie} );
//     }
//   });
// });




module.exports = router;
