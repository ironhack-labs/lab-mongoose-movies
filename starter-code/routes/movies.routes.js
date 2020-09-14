
const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie.model')

//Iteration #8: Listing Our Movies

router.get('/index',(req,res) => {

  Movie.find({}) 
  .then(movies => res.render('movies/index', { movies }))
  .catch(err => console.log('Error: ', err))

})

//Iteration #10: Adding New Movies

router.get('/create', (req, res) => res.render('movies/new'))
router.post('/create', (req, res) => {

  const { title,genre,plot } = req.body

  Movie.create({ title,genre,plot })
  .then(() => res.redirect('/'))
  .catch(err => console.log('Error: ', err)) })

//Iteration #11: Deleting Movies
router.post('/delete/:id',(req,res) =>{

  Movie.findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/'))
  .catch(err => console.log('Error: ', err))
  
})

//Iteration #12 (Bonus): Editing Movies
router.get('/edit/:id',(req,res) => {

  const id = req.params.id

  Movie.findById(id)
  .then(editMovie => res.render('movies/edit',editMovie))
  .catch(err => console.log('Error: ', err))
})

router.post('/edit/:id',(req, res) => {

  const { title, genre, plot } = req.body
  const id = req.params.id

  Movie.findByIdAndUpdate(id, { title, genre, plot })
  .then(() => res.redirect('/'))
  .catch(err => console.log('Error: ', err))
  })


//Iteration #9: The Movie Details Page
router.get('/:id',(req,res) =>{


  Movie.findById(req.params.id)
  .then(movieDetails => res.render('movies/show',movieDetails))
  .catch(err => console.log('Error: ', err))

})

module.exports = router