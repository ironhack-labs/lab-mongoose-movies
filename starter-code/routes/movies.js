const express = require('express')

const router = express.Router()

const Movie = require('../models/Movie.model')


router.get('/movies/new-movie', (req,res,next)=>{
    res.render('movies/newmovie')
})

router.post('/movies/new-movie', (req,res,next)=>{
    const {title,genre,plot} =req.body
    console.log(title)
    Movie.create(
        {title,genre,plot}
    ).then((addedMovie) =>{
        console.log(`You added the movie ${addedMovie} correctly`)
        res.redirect('/movies')
    }).catch((err)=>{console.log(err)})
})

router.post('/movies/:id/delete', (req,res,next)=>{
    const id=req.params.id
    Movie.findByIdAndDelete(id)
    .then((movieToDelet)=>{
        res.redirect('/movies')
    }).catch((err)=>{
        console.log(err)
        next(error)
    })
})

router.get('/movies/:id/edit', (req,res,next)=>{
    const id=req.params.id
    Movie.findById(id)
    .then((movieToEdit)=>{
        res.render('movies/edit',{movieToEdit})
    }).catch((err)=>{
        console.log(err)
        next(error)
    })
})

router.post('/movies/:id/edit', (req,res,next)=>{
    const id=req.params.id
    const {title,genre,plot} =req.body
    Movie.findByIdAndUpdate(id,{title,genre,plot},{new:true})
    .then((editedMovie)=>{
        console.log("The update was succesful")
        res.redirect('/movies')
    }).catch((err)=>{
        console.log(`There was an error:${err}`)
        next(error)
    })
})

router.get('/movies', (req,res,next)=>{
    Movie.find({})
    .then((listedMovies)=>{
        res.render('movies/index',{listedMovies})
    }).catch((err)=>{console.log(`You have an error: ${err}`)
         next(error)   })
})



router.get('/movies/:id', (req,res,next)=>{
    const id=req.params.id
    Movie.findById(id)
    .then((selectedMovie)=>{
        res.render('movies/show',{selectedMovie})
    }).catch((err)=>{
        console.log(err)
        })

})


module.exports = router;