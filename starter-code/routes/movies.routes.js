const express = require('express')

const router = express.Router()
const Movies = require('../models/movie')

router.get('/',(req,res) =>{

    Movies.find()
    .then(movies => res.render('movies/index',{movies}))

})


router.get('/movies-detail/:movies_id',(req,res) =>{

    const id = req.params.movies_id

    Movies.findById(id)
    .then(movies => res.render('movies/movies-detail',movies))

})

router.get('/create-movie',(req,res) => res.render("movies/create-movie"))

router.post('/create-movie',(req,res) => {

    const {title,genre,plot} = req.body

    Movies.create({title,genre,plot})
    .then(() => res.redirect('/movies'))
    .catch(err => console.log("ERRORR", err))

})

// No consigo hacerlo de esta forma, no se qu eme falla, llevo 1 hora y no consigo saber que

router.post('/movies/:id/delete',(req,res)=>{
    console.log(id)
    const id = req.params.movies_id
    console.log(id)
    Movies.findByIdAndDelete(id)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log("ERRORR", err))
})


router.get('/update/:movies_id', (req, res) => {

    const {title,genre,plot} = req.body
    const movie_id = req.params.movies_id
    Movies.findById(movie_id)
    .then(show =>  res.render('movies/update',show))
    .catch(err => console.log("ERRORR", err))

})

router.post('/update/:movies_id',(req, res) => {

    const {title,genre,plot} = req.body
    const movie_id = req.params.movies_id

    Movies.findByIdAndUpdate(movie_id,{title,genre,plot})
    .then(()=> res.redirect('/movies'))
})
module.exports = router