const express = require('express')
const router = express.Router()
const MovieModel = require('../models/movie.model');

router.get('/movies',(req,res,next)=>{
  MovieModel.find()
      .then((movies)=>{
        res.render('movies/index.hbs',{movies});
      })
      .catch(()=>{
        next();
      })
});
router.get('/movies/:id',(req,res,next)=>{
  MovieModel.findById(req.params.id)
    .then((movies)=>{
      res.render('movies/show.hbs',{movies});
    })
    .catch(()=>{
      next();
    })
});
router.get('/movies/new',(req,res,next)=>{
  res.render('movies/new.hbs');
});
router.post('/movies',(req,res,next)=>{
  MovieModel.create(req.body)
    .then((movies)=>{
      res.redirect('/movies')
    })
    .catch(()=>{
      next();
    })
});
router.post('/movies/:id/delete',(req,res,next)=>{
  MovieModel.findByIdAndDelete(req.params.id)
    .then((movies)=>{
      res.redirect('/movies')
    })
    .catch(()=>{
      next();
    })
});
router.get('/movies/:id/edit',(req,res,next)=>{
  MovieModel.findById(req.params.id)
    .then((movie)=>{
      console.log(movie)
      res.render('movies/edit.hbs',{movie})
    })
    .catch(()=>{
      next();
    })
});
router.post('/movies/:id/edit',(req,res,next)=>{
  MovieModel.findByIdAndUpdate(req.params.id, req.body)
    .then((movie)=>{
      console.log(movie)
      res.redirect('/movies')
    })
    .catch(()=>{
      next();
    })
});

module.exports = router;