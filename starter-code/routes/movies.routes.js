const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.models')
const Celebrity = require('../models/Celebrity.models')

router.get('/list', (req, res, next) => {
  Movie.find()
    .populate('casting')
    .then( allMovies => {
      
      res.render('movies/list', {movies: allMovies})
    
    })
    .catch( err => console.log('error finding movies', err))
    
})



router.get('/list/:movie_id', (req, res, next) => {
  Movie.findById(req.params.movie_id)
    .then( theMovie => {
      res.render('movies/details', theMovie)
    })
    .catch(err => console.log('Helloooooooooooooooo', err))
  
})


router.get('/add', (req, res, next) => {
  Celebrity.find()
    .then( allCelebrities => {
      res.render('movies/add', {celebrity: allCelebrities})

    })
    .catch( err => {
      console.log(err)
      next()
    })
})



router.post('/add', (req, res, next) => {
  const {title, genre, plot, casting} = req.body
  const newMovie = new Movie({title, genre, plot, casting})

  console.log('THIS IS THE NEW MOVIE',newMovie)
  newMovie.save()
    .then(movie => res.redirect('/movies/list'))
    .catch(error => {
      console.log(error) 
      res.render("movies/add")
    })

})

router.post("/:movie_id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.movie_id)           //DeleteOne busca un objeto, para buscar por id es necesario pasar el _id
    .then( () => {
      res.redirect("/")
    })
    .catch(err => {
      console.log("error deleting movie",err)
      next()                                                    //NO ESTOY MUY SEGURO DE COMO FUNCIONA ESTE NEXT LA VDD
      
    })
})

router.get("/:movie_id/edit", (req, res, next) => {
  Movie.findById(req.params.movie_id)
    .then( theMovie => {
      res.render("movies/edit", theMovie)

    })
    .catch(err => {
      console.log(err)
      next()
    })
})

router.post("/:movie_id/edit", (req, res, next) => {
  const {title, genre, plot} = req.body
  Movie.findOneAndUpdate(req.params.movie_id, {title, genre, plot})
    .then( () => {
      res.redirect("/")
    }
    )
    .catch(err => console.log(err))


})

module.exports = router