const express = require('express');
const movieRouter  = express.Router();
const Movie = require('../models/Movie');

movieRouter.post('/movies/:id', (req, res, next) => {

  console.log('POST movies/:id  inside router..' );
   Movie.findByIdAndUpdate(req.params.id, req.body)
      .then((thingFromDB)=>{

        // res.redirect('/celebrities/' + req.params.id );
        res.redirect('/movies');

      })
      .catch((err)=>{
        console.log(err);
        next(err);
      });
});

movieRouter.get('/movies/:id/edit', (req, res, next) => {
  console.log('you are in movie edit route..');
    Movie.findById(req.params.id)
      .then((moviex)=>{
          console.log("object from db from edit is:   " + moviex)
          res.render('movies/edit', {themoviex:moviex});
      })
      .catch((err)=>{
        console.log('error ' + err);
        next(err);
      });
});


movieRouter.post('/movies/:id/delete', (req, res, next) => {
  console.log("you are delete in movies /delete  route");
  Movie.findByIdAndRemove(req.params.id)
    .then(()=>{
      res.redirect('/movies');
    })
    .catch((err)=>{
      console.log(err);
      next(err);
    });

    
});

movieRouter.get('/movies/new', (req, res, next) => {
  console.log("you are in celebreties/new GET route");

    res.render('movies/new')
    .catch((err)=>{
      console.log(err);
      next(err);
    });
  
});

movieRouter.post('/movies', (req, res, next) => {
  console.log("you are POST in celebreties/new  route");

    const newMOvie = new Movie( req.body);

    newMOvie.save()
      .then((moviex)=>{
        res.redirect('movies')
      })
      .catch((err)=>{
        console.log(err);
        res.redirect('movies/new',{
          errorMessage: "Error when adding movie to DB try again!"
        });
        next(err);
      });
});

movieRouter.get('/movies/:id', (req, res, next) => {

  console.log('GET movies/:id  inside router..' );
  Movie.findById(req.params.id)
  .then((thingFromDB)=>{

    res.render('movies/show',{theMovie :thingFromDB});
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  });
});


movieRouter.get('/movies', (req, res, next) => {
  Movie.find()
  .then((thingFromDB)=>{

    res.render('movies',{allTheMovies:thingFromDB});
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  });
});




module.exports = movieRouter;
