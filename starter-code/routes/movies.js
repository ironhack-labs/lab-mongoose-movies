const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

//controlador kiedy w naszej lini adresu local url wywoluje /movies (pierwszy parametr to nasze local url) (drugi parametr to paramentry metody render)
router.get('/movies', (req, res, next) => {
  Movie.find()  
  .then(movies => {
    res.render('movies/index', {movies}) // ten controlador daje nam rezultat w postaci hbs z mojego folderu views/movies/index odnosi sie do folderu w naszym projekcie, drugi to colleccion z bazy danych mongo
    //console.log(movies)
  })
  .catch(error => {
    console.log(error)
  })
});


router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id': movieId})  
  .then(movies => { //te movies to coleccion z mongodb compass
    res.render('movies/show', movies)  //te movies to coleccion z mongodb compass  
  })
  .catch(e => {
    console.log(e)
  })
})

router.get('/new', (req, res, next) => {
  res.render('movies/new')
})


router.post('/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newMovie = new Movie({ name, occupation, catchPhrase})
  newMovie.save( err => {
    if(err) {return next(err)}
    res.redirect('/movies');

  })
});

router.post('/movies/:id/delete', (req, res) => {
  Movie.findByIdAndRemove(req.params.id, () => res.redirect('/movies'))
})

router.get('/movies/edit/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id': movieId})
  .then(movies => {
    res.render('movies/edit', movies) 
  })
  .catch(e => {
    console.log(e)
  })
})

router.post('/movies/:id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
    Movie.findOneAndUpdate({'_id': req.params.id}, {$set: {name, occupation, catchPhrase}}) 
    .then(() => {
      res.redirect('/movies')
    })
    .catch(next)
  })
    


module.exports = router;


