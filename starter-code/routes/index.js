const express = require('express');
const router  = express.Router();


const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');


/* home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//Celebrities Home
router.get('/homeCelebrities', async (req, res, next) => {
  try{
    let respuesta = await Celebrity.find()
    console.log(respuesta)
      res.render('homeCelebrities', {celebrities: respuesta });
  }catch(err){
      console.log('Error while getting the celebrities from the DB: ', err);
  }
});
// add celebrity
router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase});

  newCelebrity.save()
  .then((celebrity) => res.redirect('/homeCelebrities'))
  .catch((error) => res.render('new'));
});

// edit celebrity
router.get("/homeCelebrities/edit", (req, res, next) => {
  Celebrity.findOne({ _id: req.query.celebrities_id})
  .then((celebrity) => {
    res.render('edit', {celebrity});
  })
  .catch((err) =>{
    console.log(err)
  })
});

router.post("/homeCelebrities/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.updateOne({ _id: req.query.celebrities_id }, { $set: { name, occupation, catchPhrase } }, { new: true })
  .then((celebrity)=>{
    res.redirect('/homeCelebrities');
  })
  .catch((error) =>{
    console.log(error);
  });
});
// delete celebrity
router.post("/homeCelebrities/:celebritiesId", (req, res, next) => {
  Celebrity.findByIdAndRemove({_id: req.params.celebritiesId})
  .then((celebrity)=>{
    res.redirect('/homeCelebrities');
  })
  .catch((error) =>{
    console.log(error);
  });
});
// Show details celebrity
router.get('/homeCelebrities/:celebritiesId', (req, res, next) => {
  Celebrity.findById(req.params.celebritiesId)
    .then(celebrity => {
      //console.log(celebrity, 'jsnvjksdbnv')
      res.render('show', { celebrities: celebrity });
    })
    .catch(error => {
      console.log('Error while retrieving celebrity details: ', error);
    })
});

// Movies

// Movie Home
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', {movies: movies });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});
// add movie
router.get('/newMovie', (req, res, next) => {
  res.render('newMovie');
});

router.post('/newMovie', (req, res, next) => {
  const {title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot});

  newMovie.save()
  .then((movie) => res.redirect('/movies'))
  .catch((error) => res.render('newMovie'));
});

// edit movie
router.get("/movies/editMovie", (req, res, next) => {
  Movie.findOne({ _id: req.query.movies_id})
  .then((movie) => {
    res.render('editMovie', {movie});
  })
  .catch((err) =>{
    console.log(err)
  })
});

router.post("/movies/editMovie", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.updateOne({ _id: req.query.movies_id }, { $set: { title, genre, plot} }, { new: true })
  .then((movie)=>{
    res.redirect('/movies');
  })
  .catch((error) =>{
    console.log(error);
  });
});
// delete movie
router.post("/movies/:moviesId", (req, res, next) => {
  Movie.findByIdAndRemove({_id: req.params.moviesId})
  .then((movie)=>{
    res.redirect('/movies');
  })
  .catch((error) =>{
    console.log(error);
  });
});
//Show movie
router.get('/movies/:moviesId', (req, res, next) => {
  Movie.findById(req.params.moviesId)
    .then(movie => {
      res.render('showMovies', { movies: movie });
    })
    .catch(error => {
      console.log('Error while retrieving movies details: ', error);
    })
});

module.exports = router;