const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const Celeb = require('../models/celebrity');



router.get('/', (req, res, next) => {


  Movie.find()
    .then((allTheMovies) => {


      allTheMovies.forEach((eachMovie) => {
        if(req.user){
          if (eachMovie.creator.equals(req.user._id) || req.user.isAdmin) {
            eachMovie.mine = true;
          }
        }

      })

      res.render('movies/allMovies', { allMovies: allTheMovies })

    })
    .catch((err) => {
      next(err);
    })





  // Movie.find()
  // .then((allMoviesArray) => {
  //   res.render('movies/index', {allMovies: allMoviesArray});
  // })
  // .catch((err) =>{
  //   next(err);
  // })
})


router.get('/new', (req, res, next) => {


  if (!req.user) {
    req.flash('error', 'sorry you must be logged in to add a movie to the Database');
    res.redirect('/users/login');
  }

  // we need a list of all the authors on this page so we do
  Celeb.find()
    .then((result) => {

      res.render('movies/newMovie', { allCelebs: result });
    })
    .catch((err) => {
      next(err)
    })

  // Celeb.find()
  //   .then((allCelebs) => {
  //     console.log(allCelebs);
  //     res.render('movies/newMovie', { allCelebs: allCelebs });
  //   })
})

router.post('/new', (req, res, next) => {
  let addMovie = {
    title: req.body.theTitle,
    genre: req.body.theGenre,
    plot: req.body.thePlot,
    stars: req.body.theStars,
    creator: req.user
  }


  Movie.create(addMovie)
    .then((result) => {
      res.redirect('/movies');
    })
    .catch((err) => {
      res.render('movies/new');
    })

})




router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  Movie.findById(id).populate('stars')
    .then((movieData) => {

      console.log('+++++----- ', movieData.stars);
      res.render('movies/details', { movie: movieData });
    })
    .catch((err) => {
      next(err);
    })
})



router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id;


  Movie.findByIdAndRemove(id)
    .then((result) => {
      res.redirect('/movies')
    })
    .catch((err) => {
      next(err)
    })



  // Movie.findByIdAndRemove(id)
  //   .then((result) => {
  //     res.redirect('/movies');
  //   })
  //   .catch((err) => {
  //     next(err);
  //   })
})


router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;

  Movie.findById(id)
    .then((theMovie) => {

      Celeb.find()
        .then((allCelebs) => {

          allCelebs.forEach((eachCeleb)=>{
            if(eachCeleb._id.equals(theMovie.stars)){
              eachCeleb.chosen = true;
            }
          })
            res.render('movies/editMovie', { movie: theMovie, celebs: allCelebs });
        })
        .catch((err) => {
          next(err);
        })
    })
    .catch((err) => {
      next(err);
    })
})


router.post('/:id', (req, res, next) => {

  let id = req.params.id;

  let updateMovie = {
    title: req.body.theTitle,
    genre: req.body.theGenre,
    plot: req.body.thePlot,
    stars: req.body.theStars
  }

  console.log(req.body.theStars);

  Movie.findByIdAndUpdate(id, updateMovie)
    .then((data) => {
      res.redirect('/movies/'+id)
    })
    .catch((err) => {
      next(err);
    })
})


module.exports = router;