const express = require('express');
const router  = express.Router();
const mongoose = require("mongoose")
const Movie = require("./../models/movie");

/* GET home page */
mongoose.connect('mongodb://localhost:27017/celebritys', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    //   console.log(Movie.find({}));
      
    Movie.find({}).then((movies)=>{
        
    router.get("/", (req, res)=>{
        res.render("movies/index", {movies: movies})
    })
    router.get("/:id/details", (req, res)=>{
        Movie.find({_id: req.params.id})
            .then(movie=>{
                res.render("movies/show", {movie})
            })
    })
    router.get("/add", (req, res)=>{
        res.render("movies/add")
    })
    router.post("/add", (req, res)=>{
        const {title, genre, plot} = req.body;
        Movie.create({title, genre, plot})
            .then((newMovie)=>{console.log(newMovie);res.redirect("/movies");})
            .catch(err=>console.log(err)
            )
    }) 
    router.get("/:id/delete", (req, res)=>{
        Movie.deleteOne({_id: req.params.id})
            .then(deletion=>{
                console.log(deletion);
                
                res.render("movies/index", {movies: movies})
            })
    })
    router.get("/:id/edit", (req, res, next)=>{
        Movie.findOne({_id: req.params.id})
            .then(theChosenOne=>{
                console.log(theChosenOne);
                res.render("movies/edit", theChosenOne)})
            .catch(err=>{
                next();
                return err})
    })
    router.post("/:id", (req, res, next)=>{
        const {title, genre, plot} = req.body;
        Movie.updateOne({_id: req.params.id}, {title, genre, plot})
            .then(res.render("movies/index", {movies: movies}))
    })
  })
})



module.exports = router;