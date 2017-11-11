const express = require('express');
const Movie =require ('../models/movie');
const router = express.Router();

/* GET Item listing. */
router.get('/movies', (req, res, next)=> {
  Movie.find({},(err,data)=>{
    if(err){
      return next(err);
    }
    console.log("/movies GET");
    res.render('movies/index',{data : data});
  });
});

// New item
router.get('/movies/new', (req, res, next)=> {
      res.render('movies/new');
});

// Add new item
router.post('/movies', (req, res, next)=> {
  const data ={
    title:req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  const newMovie =new Movie(data);
  newMovie.save( (err)=>{
    if(err){
      return next(err);
    }
    res.redirect('/movies');
  });
});

// This in last possition
router.get('/movies/:id', (req, res, next)=> {
  const productId=req.params.id;
  Movie.findById(productId,(err,data)=>{
    if(err){
      return next(err);
    }
    console.log("/movies GET"+ data);
    res.render('movies/show',{data : data});
  });
});

// Edit item
router.get('/movies/:id/edit', (req, res, next)=> {
  const productId=req.params.id;
  Movie.findById(productId,(err,data)=>{
    if(err){
      return next(err);
    }
    res.render('movies/edit', {data: data});
  });
});


// Update item
router.post('/movies/:id', (req, res, next)=> {
  const productId=req.params.id;
  let dataUpdate ={
    title:req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  Movie.findByIdAndUpdate(productId,dataUpdate,(err,data)=>{
    if(err){
      return next(err);
    }
    return res.redirect('/movies');
  });
});

// Delete item
router.post('/movies/:id/delete', (req, res, next)=> {
  const productId=req.params.id;
  Movie.findByIdAndRemove(productId,(err,data)=>{
    if(err){
      return next(err);
    }
    return res.redirect('/movies');
  });
});













module.exports = router;
