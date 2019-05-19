const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')


router.get('/', (req, res, next) => res.render('movies-index'))

router.get('/list', (req, res, next) => {                            
  Movie.find()                                                         
    .then(allMovies =>{
      console.log(allMovies)
       res.render('movies-list', { movies: allMovies }) 
      })  
    .catch(error => console.log(error))
})


router.get('/detail/:movie_id', (req, res) => {
  Movie.findById(req.params.movie_id)
    .then(theMovie => res.render('movies-detail', { movie: theMovie }))
    .catch(error => console.log(error))
})


router.get('/add', (req, res) => res.render('movies-add'))
router.post('/add', (req, res) => {
  const { title, genre, plot } = req.body
  const newMovie = new Movie({ title, genre, plot })
  newMovie.save()
    .then(theMovie => res.redirect('/movies/list'))
    .catch(error => console.log(error))
})



router.post('/delete/:movie_id', (req, res, next) => {
  const id= req.params.movie_id
  Movie.findByIdAndDelete(id)
    .then(theMovie => res.redirect('/movies/list'))
    .catch(error => console.log(error))
})




router.get('/edit', (req, res) => {
  Movie.findOne({_id:req.query.movie_id})
    .then(movie=>res.render('movies-edit', { movie }))
    .catch(error=>console.log(err))
})    

router.post('/edit', (req, res)=>{
  const {title, genre, plot}=req.body
  Movie.updateOne({_id: req.query.movie_id}, {$set: {title, genre, plot}})
    .then(movie=>res.redirect('/movies/list'))
    .catch(error=>console.log(err))
})

module.exports = router