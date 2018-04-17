const express = require('express');
const Movie = require('../models/movie-model');
const router  = express.Router();

// get all movies from DB
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then( data => {
        res.render('movies/index', { movie : data});
    })
    .catch(err =>{
      next(err) ;
    });
});

//****************** Iteration4: Adding New movies *******************
router.get("/movies/new", (req,res,next) =>{
  res.render("movies/new");
})
// Add new movie in DB when click on the Save Button
router.post("/createMovie", (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movie.create({title, genre, plot})
      .then(() => {
        res.redirect("/movies");
      })
      .catch( err =>{
        next(err);
      }); 
})
//****************** /Iteration4: Adding New movies *******************

//****************** Iteration5: Delete movies ************************
router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(() =>{
    res.redirect("/movies");
  })
  .catch(err => {
    next(err);
  });
});
//****************** /Iteration5: Delete movies ************************

//****************** Iteration6: Update movies ************************
router.get("/movies/:id/edit", (req,res,next) =>{
  Movie.findById(req.params.id)
    .then( data => {
        res.render('movies/edit', {movieId: data._id, movie: data})
    })
    .catch(err => {
      next(err);
    }) ;
});

router.post("/movies/:movieId", (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(
                          req.params.movieId,                   
                          {title, genre, plot},      
                          {runValidators: true}                 
                        )
                        .find(() => {
                            res.redirect(`/movies/${req.params.movieId}`)

                        })
                        .catch (err => {
                          next(err)
                        });
});


//****************** /Iteration6: Update movies ************************


//*************************************** */
// get movie detail from DB when click on the name of the movie!
router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then( data => {
        res.render('movies/show', { movie : data});
    })
    .catch(err =>{
      next(err) ;
    });
})

module.exports = router;
