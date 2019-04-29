const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => { //made the celebrities route exist
  Celebrity.find().then(celebritiesFromDb=>{//find all celebrities n the db
    res.render('celebrities', {celebritiesInHBS : celebritiesFromDb})//send all the celebrities to the celebrities.hbs file
  })
});
router.get('/movies', (req, res, next) => { //made the movies route exist
  Movie.find().then(moviesFromDb=>{//find all movies n the db
    res.render('movies', {moviesInHBS : moviesFromDb})//send all the movies to the movies.hbs file
  })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')
});


router.post('/celebrities/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase})
  newCelebrity.save() 
  .then((celebrity) => {
    console.log('added')
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
  })
});

router.post('/movies/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot})
  newMovie.save() 
  .then((movie) => {
    console.log('added')
    res.redirect('/movies')
  })
  .catch((error) => {
    console.log(error)
  })
});


router.get('/celebrities/edit', (req, res, next) => {
  Celebrity.findOne({_id: req.query.celebrity_id})//gets the ID and prefills the form
  .then((celebrity) => {
    console.log('celebrity6536712451672354', celebrity)
    res.render("celebrities/edit", {celebrity});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/celebrities/edit', (req, res, next)=>{
  let id = req.query.celebrity_id
  let {name, occupation, catchPhrase} = req.body
  console.log('editing using id', id)
  Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase})
  .then(updatedCelebrity=>{
    console.log(updatedCelebrity)
    res.redirect('/celebrities')
  })
})

router.get('/movies/edit', (req, res, next) => {
  Movie.findOne({_id: req.query.movie_id})//gets the ID and prefills the form
  .then((movie) => {
    console.log('celebrity6536712451672354', movie)
    res.render("movies/edit", {movie});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/movies/edit', (req, res, next)=>{
  let id = req.query.movie_id
  let {title, genre, plot} = req.body
  console.log('editing using id', id)
  Movie.findByIdAndUpdate(id, {title, genre, plot})
  .then(updatedMovie=>{
    console.log(updatedMovie)
    res.redirect('/movies')
  })
})


router.get('/celebrities/delete', (req, res, next) => {
  console.log("___", req.query)
    Celebrity.findByIdAndDelete(req.query.celebrity_id)
    .then(deletedCelebrity=>{
    res.redirect('/celebrities')
    })
    .catch((error) => {
      console.log(error);
    })
  });

  router.get('/movies/delete', (req, res, next) => {
    console.log("___", req.query)
      Movie.findByIdAndDelete(req.query.movie_id)
      .then(deletedMovie=>{
      res.redirect('/movies')
      })
      .catch((error) => {
        console.log(error);
      })
    });

router.get('/celebrities/:identification', (req, res, next) => {
  // console.log(" identification ",req.params, req.query, req.body)
  ///hiiiiii  { id: '5cc72b029dbf42248cecc279' } {} {}
  Celebrity.findById(req.params.identification).then(celebritiesFromDb=>{
    res.render('celebrities/show', {celebritiesInHBS : celebritiesFromDb})
  })
});

router.get('/movies/:id', (req, res, next) => {
  // console.log(" identification ",req.params, req.query, req.body)
  ///hiiiiii  { id: '5cc72b029dbf42248cecc279' } {} {}
  Movie.findById(req.params.id).then(moviesFromDb=>{
    res.render('movies/showMovies', {moviesInHBS : moviesFromDb})
  })
});
module.exports = router;
