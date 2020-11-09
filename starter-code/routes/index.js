const express = require('express');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  const title = "Celebrities"
  res.render('index', {title});
});

// ! En vez de hacer dos nuevos archivos en 'routes', decidi hacerlo todo aqui  


//CELEBRITIES///////////////////////////////////////////////////////


//ITERACION 2-------

router.get('/celebrities', async (req, res) => {
//          ^ solamente en .get usar barra diagonal 
  const celebrities = await Celebrity.find()
  res.render('celebrities/index', {celebrities})
//            ^ Siempre OMITIR la barra diagonal en RENDER
})

//ITERACION 4-------(solo funcionó poniendo la iteracion 4 aqui...)

router.get('/celebrities/new', async (req, res) => {
  res.render('celebrities/new')
})

router.post('/celebrities/new', async (req, res) => {
  const {name, occupation, catchPhrase} = req.body
  await Celebrity.create({name, occupation, catchPhrase})
  res.redirect('/celebrities')
})

//ITERACION 3-------

router.get('/celebrities/:id', async (req, res) => {
  const {id} = req.params
  const celebrity = await Celebrity.findById(id)
  res.render('celebrities/show', celebrity)
//                               ^sin llaves porque solo es un artista, no objeto de artistas
})

//ITERACION 5-------

router.get('/celebrities/:id/delete', async (req, res) => {
  const {id} = req.params
  await Celebrity.findByIdAndDelete(id)
  res.redirect('/celebrities')
})


//MOVIES///////////////////////////////////////////////////////

//ITERACION 8-------

router.get('/movies', async (req, res) => {
  //          ^ solamente en .get usar barra diagonal 
    const movies = await Movie.find()
    res.render('movies/index', {movies})
  //            ^ Siempre OMITIR la barra diagonal en RENDER
  })

//ITERACION 10-------(solo funcionó poniendo la iteracion 10 aqui...)

router.get('/movies/new', async (req, res) => {
  res.render('movies/new')
})

router.post('/movies/new', async (req, res) => {
  const {title, genre, plot} = req.body
  await Movie.create({title, genre, plot})
  res.redirect('/movies')
})

//ITERACION 9-------

router.get('/movies/:id', async (req, res) => {
  const {id} = req.params
  const movie = await Movie.findById(id)
  res.render('movies/show', movie)
//                               ^sin llaves porque solo es un artista, no objeto de artistas
})

//ITERACION 11-------

router.get('/movies/:id/delete', async (req, res) => {
  const {id} = req.params
  await Movie.findByIdAndDelete(id)
  res.redirect('/movies')
})

module.exports = router;
