const express = require('express');
const router  = express.Router();
// import the model, you must have one MVC (model view controller per model)
const Movie = require('../models/movie'); 

// get the the request from /movies and response with the render of the movies/show.hbs 
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((allMovies)=>{
    res.render('movies/show', {moviesArr: allMovies});
  })
  .catch((err)=>{
    next(err);
  })
});

// GET route to add new movie 
router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

// POST route to add new movie
router.post('/movies/new/save', (req, res, next)=>{
  let newMovie = {...req.body}

  Movie.create(newMovie)
  .then((response)=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    next(err)
  })
});

// show movie details
router.get('/movies/:movieID', (req, res, next)=>{
  let id = req.params.movieID;

  Movie.findById(id)
  .then((oneMovie)=>{
    res.render('movies/details', {movie: oneMovie})
  })
  .catch((err)=>{
    next(err);
  })
});


// edit movie details
router.get('/movies/edit/:movieID', (req, res, next)=>{
  let id = req.params.movieID;

  Movie.findById(id)
  .then((oneMovie)=>{
    res.render('movies/edit', {movie: oneMovie})
  })
  .catch((err)=>{
    next(err);
  })
});


router.post('/movies/update/:id', (req, res, next)=>{
  let id = req.params.id;
  id = req.body.theID;
  // i put the ID in 2 places, you can do it either way


// i dont want you to blindly copy this route because it is fancy
// take a hard look at whats happening or, just cblindly copy and paste the commented code
  // Book.findByIdAndUpdate(id, {
  //   title: req.body.title,
  //   author: req.body.author,
  //   image: req.body.image
  // })
  let newInfo = {...req.body};
 
  
  
  // this stupid {new:true} thing is so that after we edit the book the response we get back shows us the new info isntead of the old info, not sure why this isnt the default
  Movie.findByIdAndUpdate(id, newInfo, {new: true})
  .then((response)=>{
    console.log(response)
    res.redirect('/movies/'+id)
  })
  .catch((err)=>{
    next(err)
  })
})


// delete a movie
router.post('/movies/:theID/delete', (req, res, next)=>{
  Movie.findByIdAndRemove(req.params.theID)
  .then((response)=>{
    res.redirect('/movies');
  })
  .catch((err)=>{
    next(err)
  }) 

})

module.exports = router;
