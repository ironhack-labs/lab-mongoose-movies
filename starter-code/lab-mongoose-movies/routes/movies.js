const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')

/* GET home page */
router.get('/movies', (req, res, next) => {

  Movie.find()
  .then((theThingsWeGet)=>{
    console.log(theThingsWeGet);
    res.render('movies/allMovies', {listOfMovies: theThingsWeGet});
  
  })
  .catch((err)=>{
    console.log(err)
  })

});

router.get('/movies/new', (req,res,next)=>{
  res.render('movies/newMovie');
});

router.post('/movies/create', (req,res,next)=>{
  // console.log("works here")
  Movie.create({
    title: req.body.newTitle,
    genre: req.body.newGenre,
    plot: req.body.newPlot
  })
  .then((response)=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    res.redirect('/movies/new')
  })

});

router.post('/movies/delete/:theID', (req, res, next)=>{
  console.log('=-=-=-=-=-=-=-=-=-=');
  Movie.findByIdAndRemove(req.params.theID)
  .then((response)=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    next(err)
  })
})

router.get('/movies/edit/:theID', (req,res,next) =>{
  // console.log('=-=-=-=-=-=-=-=-=-=')

  Movie.findById(req.params.theID)
  .then((theThingWeGet)=>{
    res.render('movies/editMovie', {theID: theThingWeGet})
  })
  .catch((err)=>{
    next(err)
  })
})

router.post('/movies/update/:theID', (req, res, next)=>{

  Movie.findByIdAndUpdate(req.params.theID, {
    title: req.body.updatedTitle,
    genre: req.body.updatedGenre,
    plot: req.body.updatedPlot
  })
  .then((response)=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    next(err)
  })

})

router.get('/movies/:theID', (req,res,next)=>{

  Movie.findById(req.params.theID)
  .then((theThingWeGet)=>{
    res.render('movies/movieDetails', {theMovieInfo: theThingWeGet})
  })
  .catch((err)=>{
    console.log(err);
  })

})



module.exports = router;