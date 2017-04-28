const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

router.get('/', (req, res, next) => {
// the '/' actually is '/celebrities'. It refers to the route we set this file celebrities.js to,
// i.e. /celebrities
  Movie.find({}, (err, movies) => {
    if (err){next (err)
    } else{
      res.render('movies/index', {movies: movies});
      }
  })
}) //router.get('/')

// create new celebrity **********************************
router.get('/new', (req, res, next) =>{
  console.log('tetststestts', req);
  res.render('movies/new');
});

// posts the new celebrity data*********************
router.post('/', (req, res, next) => {
  console.log('ogjguytf', req.body.title);
  const movieModel = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  }
  const newMovie = new Movie(movieModel)
  newMovie.save ( (err) => { //saves new celebrity
    if (err) {
      next(err)
    }
    res.redirect('/movies') //refreshes the celebrities page
  })
});


//creating a page for each specific celebrity**********************************
router.get('/:id' , (req, res, next)=>{
  Movie.findById(req.params.id, (err, movies)=>{ //params is a set var in every req, which
    //contains the object Celebrity's data
    if (err){next (err)
    } else{
      res.render('movies/show', {movies: movies});
    }
  })
})

// delete a celebrity from the celebrity list**********
router.post('/:id/delete', (req, res, next) => {
  console.log(req);
  Movie.findByIdAndRemove(req.params.id, (err,movies) =>{
    if (err) {
      next(err)
    }
    res.redirect('/movies')
  })
})


// edit an existing celebrity page
router.get('/:id/edit', (req, res, next) => {
  console.log('editeditedit', req)
  Movie.findById(req.params.id, (err, movies)=> { //params is a set var in every req, which
    //contains the object Celebrity's data
    if (err){
      next (err)
    }
      res.render('movies/edit', {movies: movies});
  })
})



router.post('/:id', (req, res, next) =>{
  // console.log('postpostpost', req)
  const celebrityModel = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  }

  Celebrity.findByIdAndUpdate(req.params.id, celebrityModel, {new: true}, (err, newCelebrityModel)=> {
    if (err){next (err)}
    console.log(newCelebrityModel)
      res.redirect('/celebrities')
    })
})

module.exports = router;
