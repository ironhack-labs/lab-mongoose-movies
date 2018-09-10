const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')



router.get ('/movies/index', (req, res, next)=>
{
  Movie.find()
  .then((ret) => {
    console.log(ret)
    res.render('movies/index', {listOfMovies: ret})
  })
  .catch(next)
  
})


router.post('/movies/update/:id', (req, res, next)=> {

  let theTitle = req.body.movieTitle;
 let  theGenre = req.body.movieGenre;
  let thePlot = req.body.moviePlot;

  Movie.findByIdAndUpdate(req.params.id, {

    title: theTitle,

    genre: theGenre,

    plot: thePlot,


  })
  .then((ret)=> {
    res.redirect('/movies/index')
  })
  .catch((err)=>{
    console.log(err);
    next();
  })
})

router.get ('/movies/new', (req, res, next)=>
{
  res.render('movies/new')
  .then((ret) => {
    console.log(ret);
  })
  .catch(next)
})

router.get ('/movies/edit/:id', (req, res, next)=> {
  Movie.findById(req.params.id)
  .then((ret)=> {
    res.render('movies/edit', {Movie: ret})
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
 
  Movie.create({
    title: newTitle,
    genre: newGenre,
    plot: newPlot,
 
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