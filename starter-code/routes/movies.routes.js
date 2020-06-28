const express = require('express')
const router = express.Router()
const Celebrity = require('./../models/movies')
const Movie = require('./../models/movies')

//Endpoints

//Lista de Peliculas

router.get('/listaPeliculas',(req,res) => {
  Movie.find()
  .then(allMovies => res.render('./movies/moviesList',{allMovies}))
  .catch(err => console.log('Error en la lista de películas',err))

})
//Ver detalles de las películas
router.get('/detallesPeliculas/:idPeliculas',(req,res) => {
  Movie.findById(req.params.idPeliculas)
    .then(theMovie => res.render('./Movies/showMovies',theMovie))
    .catch(err => console.log('Error en los detalles de la película ',err))
})
//Crear un nueva Película
router.get('/nuevaPelicula',(req,res) => {
  res.render('./movies/newMovie')
})

router.post('/nuevaPelicula',(req,res) => {
  const {title,genre,plot} = req.body
  Movie
  .create({title,genre,plot})
  .then(() => res.redirect('listaPeliculas'))
  .catch(err => console.log('Error al crear una nueva película ',err))

})
//Borrar una película
router.post('/:idPelicula/borrar',(req,res) => {
  Movie.findByIdAndRemove(req.params.idPelicula)
  .then(() => res.redirect('/movies/listaPeliculas'))
  .catch(err => console.log('Error al borrar una película ',err))

})
//Editar películas
router.get('/editarPelicula/:idPelicula',(req,res) => {
  Movie.findById(req.params.idPelicula)
  .then(theMovie => res.render('movies/editMovies',theMovie))
  .catch(err => console.log('Error al editar la película ',err))
})

router.post('/editarPelicula/:idPelicula',(req,res) => {

  const {title,genre,plot} = req.body

  Movie.findByIdAndUpdate(req.params.idPelicula,{title,genre,plot},{new:true})
  .then(() => res.redirect(`/movies/detallesPeliculas/${req.params.idPelicula}`))
  .catch(err => console.log('Error al editar la película ',err))
})



module.exports = router