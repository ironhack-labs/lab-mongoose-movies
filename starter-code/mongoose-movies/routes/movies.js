const express = require('express');
const movieRouter = express.Router();


const Movie = require('../models/movie');
// dont forget to require your models.

//
movieRouter.get('/movies', (req, res, next)=>{
  Movie.find()
  .then((listOfMovies)=>{
    res.render('movies/movieIndex', {listOfMovies});
  })
  .catch((err) =>{
    next(err);
  });
});


//creates new movies and displays forms
movieRouter.get('/movies/new', (req, res, next) =>{
  res.render('movies/newMovies');
});

//this post route will correspond to the form action.
movieRouter.post('/movies/create', (req, res, next)=>{
   const newMovie = {
     //left side are fields from Model, right side are fields from input form/names
    title: req.body.newTitle,
    genre: req.body.newGenre,
    plot: req.body.newPlot
  };
  Movie.create(newMovie)
  .then((response)=>{
    //redirect is looking for a URL so must begin with a / because it will try to visit that URL next.
    res.redirect('/movies');
  })
  .catch((err)=>{
    next(err);
  });

});

//update the movie - use a get Route to display the
movieRouter.get('/movies/edit/:movieId', (req, res, next) =>{
  const id = req.params.movieId;
  Movie.findById(id)
  .then(oneMovie =>{
    res.render('movies/editMovie', {movie: oneMovie});
  })
  .catch((err)=>{
    next(err);
  });
});

//post route now to pick up those changes and send it to our DB, otherwise we would 404 when clicking on the button
//to save our changes.

movieRouter.post('/movies/edit/:movieId', (req, res, next) =>{
  const id = req.params.movieId;
  const editedMovie = {
    title: req.body.editTitle,
    genre: req.body.editGenre,
    plot:  req.body.editPlot
  };
  Movie.findByIdAndUpdate(id, editedMovie)
  .then( () =>{
    res.redirect(`/movies/${id}`);
  })
  .catch((err)=>{
    next(err);
  });
});


movieRouter.get('/movies/:id', (req, res, next) =>{
  const movieId= req.params.id;
  Movie.findById(movieId)
  .then(oneMovie =>{
    console.log(oneMovie);
    //           movies is in views, moviedetails is the file inside the folder
    res.render('movies/movieDetails', {movie: oneMovie});
  })
  .catch((err)=>{
    next(err);
  });
});


module.exports = movieRouter;
