const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')


/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/celebrities', (req, res) => {
  Celebrity.find()
  .then(celebrities=>{res.render('celebrities/index', {celebrities})})
  .catch(err=>console.log(err));
});

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new')
});

router.post('/celebrities/new', (req, res) => {
const {name, occupation, catchPhrase} = req.body
const newCelebrity = new Celebrity({name, occupation, catchPhrase})
 newCelebrity.save()
.then((celebrity)=>res.redirect('/celebrities'))
.catch(err=>console.log(err));
})

router.post('/celebrities/:id/delete', (req, res) => {
  let celebrityId = req.params.id
 Celebrity.findByIdAndRemove({"_id": celebrityId})
  .then((celebrity)=>res.redirect('/celebrities'))
  .catch(err=>console.log(err));
  })

  router.get('/celebrities/:id/edit', (req, res) => {
    let celebrityId = req.params.id
    Celebrity.findOne({"_id": celebrityId})
    .then((celebrity)=>{
      console.log(celebrity)
      res.render('celebrities/edit', {celebrity})
    })
    .catch(err=>console.log(err));
      })
  
  router.post('/celebrities/:id', (req, res) => {
      const  {name, occupation, catchPhrase} = req.body
      Celebrity.updateOne({id: req.query.celebrity.id}, {$set: {name, occupation, catchPhrase}})
      .then(celebrity=>res.redirect('/celebrities'))
      .catch(err=>console.log(err));
      });

router.get('/celebrities/:id', (req, res) => {
  let celebrityId = req.params.id
  Celebrity.findOne({"_id": celebrityId})
  .then(celebrity=>{res.render('celebrities/show', {celebrity})})
  .catch(err=>console.log(err));
});


router.get('/movies', (req, res) => {
  Movie.find()
  .then(movies=>{res.render('movies/index', {movies})})
  .catch(err=>console.log(err));
});

router.get('/movies/new', (req, res) => {
  res.render('movies/new')
});

router.post('/movies/new', (req, res) => {
const {title, genre, plot} = req.body
const newMovie = new Movie({title, genre, plot})
 newMovie.save()
.then((movie)=>res.redirect('/movies'))
.catch(err=>console.log(err));
})

router.post('/movies/:id/delete', (req, res) => {
  let movieId = req.params.id
 Movie.findByIdAndRemove({"_id": movieId})
  .then((movie)=>res.redirect('/movies'))
  .catch(err=>console.log(err));
  })

router.get('/movies/:id', (req, res) => {
  let movieId = req.params.id
  Movie.findOne({"_id": movieId})
  .then(movie=>{res.render('movies/show', {movie})})
  .catch(err=>console.log(err));
});

module.exports = router;
