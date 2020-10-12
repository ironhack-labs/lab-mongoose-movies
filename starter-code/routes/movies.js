const express = require('express')

const movieModel = require('../models/movie')

const router = express.Router()


router.get('/movies', (req,res, next)=>{
    movieModel.find()
    .then((movie) =>{
        console.log(movie)
        res.render('movies/index.hbs', {movie})
    })
    .catch((err) =>{
        console.log("Problem with the collection", err)
    })
})


router.get('/movies/new', (req,res, next)=>{
    res.render('movies/new.hbs')

 })

router.post('/movies/new', (req, res) =>{
 movieModel.create(req.body)
 .then(()=>{
     res.redirect('/movies')
 })
 .catch(()=>{
     res.redirect('/movies/new');
     console.log('Couldnt create movie')
 })
})   


router.get('/movies/:id', (req,res, next)=>{
    let id = req.params.id
    movieModel.findById(id)
    .then((movie) =>{
        console.log(movie)
        res.render('movies/details.hbs', {movie})
    })
    .catch((err) =>{
        console.log("Problem with the collection", err)
    })
})  

router.post('/movies/:id/delete', (req,res, next)=>{
    let id = req.params.id
       movieModel.findByIdAndDelete(id)
    .then((movies) =>{
        console.log(movies)
        res.redirect('/movies')
    })
    .catch((err) =>{
        console.log("Couldnt delete movie", err)
    })
})  

module.exports = router