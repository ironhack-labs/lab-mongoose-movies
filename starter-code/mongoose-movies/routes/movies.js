const express = require('express');
const movieRouter = express.Router();

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
// dont forget to require your models.

movieRouter.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
});

//
movieRouter.get('/movies', (req, res, next)=>{
  Movie.find()
  .populate('celebrity')
  .then((listOfMovies)=>{
    res.render('movies/movieIndex', {listOfMovies});
  })
  .catch((err) =>{
    next(err);
  });
});

//Start off here when you get back
//creates new movies and displays forms
movieRouter.get('/movies/new', (req, res, next) =>{
  Celebrity.find()
  .then((allTheCelebrities)=>{
      res.render('movies/newMovies', {allTheCelebrities});
  })
  .catch((err)=>{
    next(err);
  });
});
//man im not too sure about this part ^, line 25, should i make an object movies? or reference movies?

//this post route will correspond to the form action.
movieRouter.post('/movies/create', (req, res, next)=>{
   const newMovie = {
     //left side are fields from Model, right side are fields from input form/names
    title: req.body.newTitle,
    genre: req.body.newGenre,
    celebrity: req.body.celebrity,
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

    Celebrity.find()
    .then((allTheCelebrities)=>{
      res.render('movies/editMovie', {movie: oneMovie, celebrity: allTheCelebrities});
    })
    .catch((err)=>{
      next(err);
    });

  })
  .catch((err)=>{
    next(err);
  });
});

//post route now to pick up those changes and send it to our DB, otherwise we would 404 when clicking on the button
//to save our changes.


movieRouter.post('/movies/delete/:movieId', (req, res, next)=>{
  const id = req.params.movieId;
  Movie.findByIdAndRemove(id)
  .then((response)=>{
    res.redirect('/movies');
  })
  .catch((err)=>{
    next(err);
  });
});


movieRouter.post('/movies/edit/:movieId', (req, res, next) =>{
  const id = req.params.movieId;
  const editedMovie = {
    title: req.body.editTitle,
    genre: req.body.editGenre,
    celebrity: req.body.celebrity,
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
  .populate('celebrity')
  .then(oneMovie =>{

    res.render('movies/movieDetails', oneMovie);
     })
     .catch((err)=>{
       next(err);
     });
});


//movieRouter.get('/movies/edit/:movieId', (req, res, next) =>{
//   const id = req.params.movieId;
//   Movie.findById(id)
//   .then(oneMovie =>{
//
//     Celebrity.find()
//     .then((allTheCelebrities)=>{
//
//       res.render('movies/editMovie', {movie: oneMovie, celebrity: allTheCelebrities});
//     })
//     .catch((err)=>{
//       next(err);
//     });
//   })
//   .catch((err)=>{
//     next(err);
//   });
// });

module.exports = movieRouter;
