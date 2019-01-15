const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/celebrity')
const Movies = require('../models/movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res) => {
  Celebrities.find()
  .then(celebrities => {
    res.render('celebrities/celebrities', {celebrities})
  })
})


router.get('/movies', (req, res) => {
  Movies.find()
    .then(movies => {
      res.render('movies/movies', { movies })
    })
})


router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new')

})

router.get('/movies/new', (req, res) => {
  res.render('movies/new')

})


router.post('/movies/', (req, res) => {
  const { title, genre, plot } = req.body
  const newMovie = new Movies({ title, genre, plot })
  newMovie.save()
    .then(movies => res.redirect(301, '/movies'))
    .catch(err => res.render('movies/new'))
})

router.post('/celebrities/', (req, res) => {
  const {name, occupation, catchPhrase} = req.body
  const newCelebrity = new Celebrities({name, occupation, catchPhrase})
  newCelebrity.save()
  .then( celebrities => res.redirect(301, '/celebrities'))
  .catch(err => res.render('celebrities/new'))
})

router.post('/celebrities/:id/delete', (req, res)=>{
  let idCelebrities = req.params.id
  Celebrities.findByIdAndRemove(idCelebrities).then(() => res.redirect(301, '/celebrities'))
  .catch(err => console.log(err))
})


router.post('/movies/:id/delete', (req, res) => {
  let idMovies = req.params.id
  Movies.findByIdAndRemove(idMovies).then(() => res.redirect(301, '/movies'))
    .catch(err => console.log(err))
})


router.get('/celebrities/:id', (req, res) =>{
  let idCelebrities = req.params.id
  Celebrities.findOne({_id:idCelebrities}).then(celebrity => {
    res.render('celebrities/show', {celebrity})
  }).catch(err => console.log(err))

})





router.get('/movies/:id', (req, res) => {
  let idMovies = req.params.id
  Movies.findOne({ _id: idMovies }).then(movie => {
    res.render('movies/show', { movie })
  }).catch(err => console.log(err))

})


/*siempre al ultimo*/
module.exports = router;
