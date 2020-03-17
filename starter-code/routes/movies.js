const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')


router.get('/', (req, res, next) => {
    Movie.find()
      .then(respuesta => {
        res.render('movies/index', { respuesta });
      })
      .catch(error => {
        console.log('Error while getting the Movie from the DB: ', error);
      })
  });
  
  router.get("/new", (req, res, next) => {
    res.render(('movies/new'))
  })
  
  router.get("/:id/edit", (req, res, next) => {
    Movie.findById(req.params.id)
      .then(respuesta => {
        res.render('movies/edit', respuesta)
      })
  })
  
  router.get("/:id", (req, res, next) => {
    Movie.findById(req.params.id)
      .then(respuesta => {
        res.render('movies/show', respuesta)
      })
  })
  
  
  router.post('/new', (req, res, next) => {
    Movie.create(req.body)
    .then(data =>{
      res.redirect("/movies")
    } )
    .catch(err=>res.render("/new",{errorMessage:"errorrrr!!!"}))
  });
  
  
  router.post("/:id/delete", (req,res,next)=>{
    Movie.findByIdAndDelete({_id:req.params.id})
    .then((res.redirect("/movies")))
    .catch((err)=>next(err))  
  })
  router.post("/:id",(req,res,next)=>{
    Movie.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(res.redirect("/movies"))
  })
  
  
  
  
  module.exports = router;




  
  
  
  
  