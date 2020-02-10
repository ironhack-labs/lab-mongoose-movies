const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.model')



/* GET home page */
router.get('/', (req, res,) => {
  res.render('movie/movie-index');
});

//LISTAR PELI

router.get('/list', (req, res) => {
  Movie.find()
    .then(allMovies => res.render('movie/movie-list', { movies: allMovies }))
    .catch(err => console.log("Error consultadno las movies en la BBDD: ", err))
})

// BUSCAR FAMOSO

router.get('/details/:id', (req, res) => {

  const id = req.params.id

  Movie.findById(id)
    // .populate('author')
    .then(theMovie => res.render('movie/movie-detail',theMovie))
    .catch(err => console.log("Error consultando movie por ID en la BBDD",err))
})

//CREAR FAMOSO

router.get('/add', (req, res) => res.render('movie/movie-form'))
router.post('/add',(req,res) => {
  
  const { title, genre, plot} = req.body

  Movie.create({ title, genre, plot})
    .then(() => res.redirect('/movies/list'))
    .catch(err => console.log("Error creando movie en la BBDD",err))

})

// ELIMINAR FAMOSO

router.post('/:id/delete',(req,res) => {

  const id = req.params.id

  Movie.findByIdAndDelete(id)
    .then((x)=> res.redirect('/movies/list'))
    .catch(err => console.log("ha ocurrido un error eliminando movie de la bbdd",err))
})

module.exports = router;