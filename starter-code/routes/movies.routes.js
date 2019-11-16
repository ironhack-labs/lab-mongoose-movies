const express = require('express');
const router = express.Router();

//const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model')


//Lista de peliculas
router.get('/', (req, res) => {
  Movie.find()
    .then(allMovies => res.render('movies', {
      movies: allMovies
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

//ver detalles de una película
router.get('/details/:id', (req, res) => {
  Movie.findById(req.params.id)
    //.populate('author')
    .then(aMovie => res.render('movie', {
      movie: aMovie
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

//Manda el formulario para agregar una pelicula
router.get('/add', (req, res) => res.render('newMovie'))

// Agregar una pelicula
router.post('/add', (req, res) => {

  const {
    title,
    genre,
    plot
  } = req.body

  Movie.create({
      title,
      genre,
      plot
    })
    .then(x => res.redirect('/movies'))
    .catch(err => 'error: ' + err)
})

//mandar el formulario para editar una pelicula
router.get('/edit', (req, res) => {
  const movId = req.query.movId
  Movie.findById(movId)
    //.populate('autor')
    .then(theMovie => res.render('editMovie', theMovie))
    .catch(err => console.log('error!!', err))
})

// Editar una película
router.post('/edit', (req, res) => {
  const {
    title,
    genre,
    plot
  } = req.body
  const movId = req.query.movId
  Movie.findByIdAndUpdate(movId, {
       title,
       genre,
       plot
    })
    .then(res.redirect('/movies'))
    .catch(err => console.log('error!!', err))

})

//eliminar una película por su id
router.get('/delete', (req, res) => {
  const movId = req.query.movId
  Movie.findByIdAndRemove(movId)
    //.populate('author')
    .then(res.redirect('/movies'))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

/*
// Lista de famosos
router.get('/', (req, res) => {
  Celebrity.find()
    .then(allCelebrities => res.render('celebrities', {
      thecele: allCelebrities
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

//un famoso por su id
router.get('/details/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    //.populate('author')
    .then(theCelebrity => res.render('celebrity', {
      cell: theCelebrity
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

// Manda el formulario para agregar un famoso
router.get('/add', (req, res) => res.render('newCelebrity'))

// Agregar un famoso
router.post('/add', (req, res) => {

  const {
    name,
    occupation,
    catchPhrase
  } = req.body

  Celebrity.create({
      name,
      occupation,
      catchPhrase
    })
    .then(x => res.redirect('/celebrities'))
    .catch(err => 'error: ' + err)
})

//mandar el formulario para editar un famoso
router.get('/edit', (req, res) => {
  const cellId = req.query.cellId
  Celebrity.findById(cellId)
    //.populate('autor')
    .then(theCelebrity => res.render('editCelebrity', theCelebrity))
    .catch(err => console.log('error!!', err))
})

// Editar un famoso
router.post('/edit', (req, res) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body
  const cellId = req.query.cellId
  Celebrity.findByIdAndUpdate(cellId, {
      name,
      occupation,
      catchPhrase
    })
    .then(res.redirect('/celebrities'))
    .catch(err => console.log('error!!', err))

})

//eliminar un famoso por su id
router.get('/delete', (req, res) => {
  const cellId = req.query.cellId
  Celebrity.findByIdAndRemove(cellId)
    //.populate('author')
    .then(res.redirect('/celebrities'))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});
*/
module.exports = router;