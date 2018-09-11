const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const Celebrity = require('../models/celebrity');



router.get ('/movies/index', (req, res, next)=>
{
  Movie.find().populate('stars')
  .then((ret) => {
    console.log(ret)
    res.render('movies/index', {listOfMovies: ret})
  })
  .catch(next)
  
})


router.post('/movies/update/:Movieid', (req, res, next)=> {

  let theTitle = req.body.movieTitle;
 let  theGenre = req.body.movieGenre;
  let thePlot = req.body.moviePlot;
  let theStar = req.body.movieStar;

  Movie.findByIdAndUpdate(req.params.Movieid, {

    title: theTitle,

    genre: theGenre,

    plot: thePlot,

    $push: { stars: theStar }
    

  })
  .then((ret)=> {
    Celebrity.findByIdAndUpdate(theStar, 
      {$push: {movies: req.params.Movieid},
    })
    .then((response)=> {
      res.redirect('/movies/index')
    })
  })
  .catch((err)=>{
    console.log(err);
    next();
  })
})

router.get ('/movies/new', (req, res, next)=>
{
  Celebrity.find()
    .then((allTheCelebs)=>{
        res.render('movies/new', {celebs: allTheCelebs});
    })
  .then((ret) => {
    // console.log(ret);
  })
  .catch(next)
})


router.get ('/movies/edit/:id', (req, res, next)=> {
  Movie.findById(req.params.id)

  .then((ret)=> {
    Celebrity.find()
    .then((allTheCelebs)=>{
      res.render('movies/edit', {Movie: ret, celebs: allTheCelebs});
    })
  })
})


router.get ('/movies/:id', (req, res, next)=> 
{
  console.log(req.params.id);
  Movie.findById(req.params.id)
  .then((ret) => {
    console.log(ret)
    res.render('movies/show', {movie: ret})
  })
  .catch(next)
})

router.post('/movies/create', (req, res, net)=> {
  let newTitle = req.body.movieTitle;
  let newGenre = req.body.movieGenre;
  let newPlot = req.body.moviePlot;
  let newStar = req.body.movieStar;
  // console.log('>>>>><<<<<<<<')
  // console.log(newStar);
 
  Movie.create({
    title: newTitle,
    genre: newGenre,
    plot: newPlot,
    stars: [newStar]
 
  })
  .then((ret)=> {
    res.redirect('/movies/index')
  })
  .catch((err)=> {
    next(err)
  })
 })


 router.post('/movies/:id/delete', (req, res, next)=> {
  Movie.findByIdAndRemove(req.params.id)
  .then((ret)=> {
    res.redirect('/movies/index')
  })
  .catch(next)
  })

module.exports = router;