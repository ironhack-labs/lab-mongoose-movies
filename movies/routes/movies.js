const express = require('express');
const router = express.Router();

// require the Movie model here
const Movie = require('../models/modelForMovies.js');

// ===   Render a list of MOVIES and sends ================
//====   the list with movieList variable ================
//====    to the view =====================================
router.get('/movies', (req, res, next) => {
  
  Movie.find((err, movieList) => {
    if (err) {
      next(err);
      return;
    }
    res.render('movies/index.ejs', {
      movieList: movieList
    });
  });
});
//========Add new movie========
router.get('/movies/new', (req, res, next) => {
  res.render('movies/newMovie.ejs',{});
});

//=== Post the the form and save the data   =======
//======== in the data base   =====================
router.post('/movie/new', (req, res, next) => {

      const newMovieInfo = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        // description: req.body.description,
        // imageUrl: req.body.imageUrl,
      }
    const newMovie = new Movie(newMovieInfo);
    newMovie.save( (err) => {
        if (err) { 
          res.render('movie/new.ejs', {
              errors:newMovie.errors
          });
        return}
        // redirect to the list of celebs if it saves
        return res.redirect('/movies');
      });
});

router.post('/movies/:id/delete', (req, res, next) => {
    const movieId = req.params.id;
    Movie.findByIdAndRemove(movieId,(err, theMovie) =>{
      if(err){
        next(err);
        return;
      }
      res.redirect('/movies');
    });
});










//========Movie Details =============
router.get('/movies/:id',(req,res,next) => {

    const movieId=req.params.id;

    Movie.findById(movieId,(err,theMovie) => {
      if(err){
        next(err);
        return;
      }
      if (!theMovie){
        next();
        return;
      }
      res.render('movies/movieDetails.ejs', {
        theMovie:theMovie
      });
    });

});

//========Movie Edit =============
router.get('/movies/:id/edit',(req,res,next) => {  //-----------
    const movieId = req.params.id;                 //           |
    Movie.findById(movieId,(err,theMovie) => {     //           |
      if(err){
        next(err);
        return;
      }
    res.render('movies/editMovie.ejs', {
      theMovie:theMovie
    });
    }); 
});                                                // .        |
                                                    //         |
router.post('/movies/:id', (req, res, next) => {    //----------
    const movieId = req.params.id;
        
      const movieChanges = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        // description: req.body.description,
        // imageUrl: req.body.imageUrl,
      };
      Movie.findByIdAndUpdate( movieId,movieChanges, (err,theMovie) =>{
        if(err){
          next(err);
          return;
        }
        res.redirect('/movies');
    });
});




module.exports = router;