const express = require('express');
const router  = express.Router();
const Movies = require("../models/movie")
const dotenv = require("dotenv")
dotenv.config()


//CastError: Cast to ObjectId failed for value "new" at path "_id" for model "movieSchema"

//Iteration 8
router.get('/movies', (req, res, next) => {
    Movies.find()
    .then((movie)=>{
res.render('movies/index.hbs',{movie})
})
})

//Iteration 9
router.get('/movies/:id', (req, res, next) => {
    Movies.findById(req.params.id)
    .then((movie)=> {
        res.render('movies/show.hbs',{movie})
    })
    .catch((err)=>{
console.log(err)
    })
})

//Iteration 10

router.get('/movies/new', (req, res, next) => {
    
    res.render('movies/new.hbs')
    }) 

router.post('/movies', (req, res, next) => {
   
    let{title,genre,plot}= req.bodyc
    Movies.create({title,genre,plot})
    .then(()=>{
        res.redirect('/movies')
    })
    .catch(()=>{
            res.render('movies/new.hbs')
        })    
    })


//Iteration 11

router.post('/movies/:id/delete', (req, res, next) => {
    Movies.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/movies')
    })
    .catch(()=>{
        next()
    })
   })



module.exports = router;