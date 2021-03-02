const express = require('express');
const router  = express.Router();
const MovieModel = require('../model/movie-model')
const CelebrityModel = require('../model/celebrity-model')


router.get("/", (req, res, next)=>{
    MovieModel.find().populate("celebrities")
    .then((movies)=>res.render('movies/movies', movies ))
    .catch(next) 
})


router.get("/new", (req, res, next)=>{
    CelebrityModel.find()
    .then((celebrities)=>res.render('new-movie', celebrities ))
    .catch(next) 
})


router.post("/create", (req,res,next)=>{
    const {title, genre, plot, cast}= req.body
    MovieModel.create({title, genre, plot, cast})
    .then(()=>res.redirect("/movies"))
    .catch(next)
})

module.exports = router