const router = require('express').Router()
const Movie = require('../models/Movie')


router.get('/movies', async (req, res, next) => {

  const allMovies = await Movie.find()
  console.log(allMovies)
  res.render('movies/index', {allMovies})

})


//Se crea la pestaña para cuando la persona de clic lo redirecicone a la pelicula pero con su ID
router.get('/movies/:id', async(req, res, netx)=>{
  const {id} = req.params
  const movie = await Movie.findById(id)
  res.render('movies/show',movie)
})


//Paso uno crear una ruta nueva para la creacion de las peliculas por el usruiario

router.get('/new',(req,res,netx)=>{
  res.render('/movies/new')
})

//Crear una ruta para el formulario donde el usuario creara la nueva pelicukla de su agrado
//Esta contentra los mismos elementos que los guardados en el Schema

router.post('/movies/',async(res,req,netx)=>{
  const newMovie = {
    title: title,
    genre: genre,
    plot: flot
  }
  await Movie.create(newMovie)
  res.redirect('/movies')
})


//Creamos una nueva ruta la cual contrendra el valor para elmiminar la pelicua que el quiere
router.get('movies/:id/delete', async(req,res,netx) =>{
  const {id} = req.params
  await Movie.findByIdAndDelete(id)
  res.redirect('/movies')
})


module.exports = router;
