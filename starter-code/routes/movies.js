const express = require('express');
const router  = express.Router();
const Movie  = require('../models/Movie');
const mongoose = require('../node_modules/mongoose');


router.get('/movies', (req, res, next)=>{
  Movie.find()
  .then((movies)=>{
      res.render('movies/movies-index', {movies})
  })
  .catch((err)=>{
      next(err);
  })
})

router.get('/movies/new', (req, res, next)=>{
  res.render('movies/new-movie');
})

router.post('/movies/new', (req, res, next)=>{
  Movie.create(req.body)
  .then(()=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/movies/:id/delete', (req, res, next)=>{
  Movie.findByIdAndRemove(req.params.id)
  .then((x)=>{
    res.redirect("/movies")
  })
  .catch((err)=>{
    next(err)
  })

})

router.get('/movies/:id', (req, res, next)=>{

  // console.log("=== ", req.params.id)
  // if(!req.params.id.Types.ObjectId){
  //   res.redirect('/movies')
  // }
  // mongoosxe.types.objectidis valid is checking if the id matches any of the movies ids and if not redirects to the entire movies page
  console.log("=== ", req.params.id)
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.redirect('/movies')
  }

  Movie.findById(req.params.id)
  .then((movies)=>{
    console.log('movie info ----------- ', movies)
    if(!movies.length){
      res.redirect('/movies')
    } else {
      res.render('movies/movie-details', movies);
    }
        res.render('celebrities/celebrity-details', celebrities)
  })
  .catch((err)=>{
    // console.log("err===========")
      next(err);
  })
})

// router.get('/celebrities/5bec73d9ca4db9dcc3d7b797', (req, res, next)=>{
//   res.render('celebrities/celebrity-details')
  
// })



// on all routes you need to export router
module.exports = router;
