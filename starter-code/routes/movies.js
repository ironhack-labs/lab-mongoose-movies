const { response } = require('express');
const express = require('express');
const router  = express.Router();
const mongoose = require("mongoose")



//Importando del archivo modelo para usarlo aquí
const Movie = require("../models/Movie.js")

router.get("/", (req, res, next)=>{

    Movie.find({}, {title: 1})
    .then((movies)=>{
        res.render("movies/index", {movies})
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.get("/new", (req, res, next)=>{
    res.render("movies/new")
})

router.post("/new", (req, res, next)=>{

    const newMovie = req.body

    Movie.create(newMovie)

    .then((result)=>{
        res.redirect("/movies")
        console.log(result)
    })
    .catch((err)=>{
        res.redirect("/new")
        console.log(err)
    })

})

router.get("/:id", (req, res, next)=>{
    const movieId = req.params.id
    
    Movie.findById(movieId)
    .then((result)=>{
        res.render("movies/show", result)
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.post("/:id/delete", (req, res, next)=>{

    const movieId = req.params.id
    
    Movie.findByIdAndDelete(movieId)
    .then(()=>{
        res.redirect("/movies")
    })
    .catch((err)=>{
        res.send(err)
    })

})

router.get("/:id/edit", (req, res, next)=>{

    const movieId = req.params.id

    Movie.findById(movieId)
    .then((result)=>{
        res.render("movies/edit", result)
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.post("/:id", (req, res, next)=>{
    const movieId = req.params.id
    const editedMovie = req.body

    Movie.findByIdAndUpdate(movieId, editedMovie)
    .then(()=>{
        res.redirect(`/movies/${movieId}`)
    })
    .catch((err)=>{
        res.send(err)
    })
})

module.exports = router;