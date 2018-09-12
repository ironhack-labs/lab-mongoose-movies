const express = require("express")
const router = express.Router()
const Movie = require('../models/movie')
const Celebrity = require('../models/celebrity')

router.get('api/movies', (req, res, next)=>{
  Movie.find()
  .then((data)=>{
    res.json(data)
  })
  .catch((err)=>{
    res.json(err)
  })
})

router.post("/movies/create", (req, res, err)=>{
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    image: req.body.image
  })
  .then((data)=>{
    res.json(data)
  })
  .catch((err){
    req.json(err)
  })
})

module.exports = router
