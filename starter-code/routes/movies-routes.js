const express = require('express');
const router  = express.Router();

const Movie = require ('../models/Movie.model.js');
const Celebrity = require ('../models/Celebrity.model.js');

router.get('/movies/new', (req, res, next) => {
    Celebrity.find()
    .then(celebritiesFromDB => {
        res.render('movies/new-movie', { celebritiesFromDB })
    })
    .catch(err=> console.log(`Error while creating new movie: ${err}`))

  });

router.post('/movies/create', (req, res, next)=>{

    const {title, genre, plot, cast} = req.body;

    Movie.create({title, genre, plot, cast})
    .then(newMovie => {
        console.log(newMovie);
        res.redirect('/movies')
    })
    .catch(err=> console.log(`Error occured while creating new movie in DB: ${err}`))

});



router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(allMoviesFromDB => {
        res.render('movies/movies', { allMoviesFromDB })
    })
    .catch(err=> console.log(`Error while creating new movie: ${err}`))

  });


router.post('/movies/:id/delete', (req, res, next)=>{
    Movie.findByIdAndRemove(req.params.id)
    .then(()=> {
        res.redirect('/movies')
    })
    .catch(err=>console.log(`Error while removing movie from DB: ${err}`))
});

router.get("/movies/:id/edit", (req, res, next)=>{
    
      Movie.findById(req.params.id)
      .populate("cast")
      .then(movieToEdit => {
       

        Celebrity.find()
        .then((AllCelebritiesFromDB) => { 
          

            const allTheOtherCelebrities = AllCelebritiesFromDB.filter(
                (oneCelebrity) => !oneCelebrity._id.equals(movieToEdit.cast)
            );
            console.log('all other celebs', allTheOtherCelebrities, 'movies to edit>>>>>>', movieToEdit.cast)
            res.render('movies/edit-movie', { movieToEdit, allTheOtherCelebrities}) 
        });
      })
      .catch(err => console.log(`Something went wrhong while finding movie to edit ${err}`))
  });

router.post('/movies/:id/edit', (req, res, next) =>{

    const {title, genre, plot, cast} = req.body;

    Movie.findByIdAndUpdate(req.params.id, {title, genre, plot, cast}, {new: true})
    .then(editedMovie => {
        console.log(editedMovie);
        res.redirect('/movies')

    })
    .catch(err => `Error occured while saving updated movie ${err}`)
});





  router.get('/movies/:id', (req, res, next)=>{
     Movie.findById(req.params.id)
     .populate('cast')
     .then(movieDetails => {
         console.log(movieDetails)
         res.render('movies/movie-details', { movieDetails })
     })
     .catch(err=>console.log(`Some error while gettin movie details ${err}`))

  });

  





  module.exports = router;