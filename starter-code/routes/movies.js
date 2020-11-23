const express = require('express');
const Movie = require('../models/Movie.model');
const router  = express.Router();

//Iteration #8: Listing Our Movies
router.get('/index', (req, res, next) => {
    Movie.find()
    .then(moviesFromDB => {
      //console.log(moviesFromDB);
      res.render('movies/index', {moviesFromDB});
    })
    .catch( err => {
      next(err);
    })
});

//Iteration #10: Adding New Movies
router.get('/new', (req, res) => {
  res.render('movies/new');
});

router.post('/', (req, res, next) => {
    
  const newMovie = new Movie(req.body);
  //console.log(newMovie);

  newMovie.save()
  .then(createdMovie => {
      console.log("Document created: ", createdMovie);
      res.redirect('movies/index');
  })
  .catch(err => {
      console.log(err);
      res.redirect('movies/new');
  });
});


//Iteration #9: The Movie Details Page
router.get('/:movieID', (req, res, next) => {
    Movie.findById(req.params.movieID)
    .then( movieDetails => {
        res.render("movies/show", {movieDetails});
    })
    .catch(err => {
        next(err);
    });
});

//Iteration #12 (Bonus): Editing Movies
router.get('/:movieID/edit', (req, res, next) => {
  Movie.findById(req.params.movieID)
  .then( movieFromDB => {
    console.log(movieFromDB)
      res.render("movies/edit", movieFromDB);
  })
  .catch(err => {
    next(err);
  })
});

router.post('/:movieID', (req, res, next) => {
    console.log(req.body);
    let query = {_id: req.params.movieID}
    let {title, genre, plot} = req.body;
    let doc = {title, genre, plot};

    Movie.update(query, doc)
    .then(editedMovie => {
        console.log("Succesfully updated", editedMovie);
        res.redirect('/movies/index');
    })
    .catch(err => next(err))
})

//Iteration #11: Deleting Movies
router.post('/:movieID/delete', (req, res, next) => {

   Movie.findByIdAndDelete(req.params.movieID)
   .then(removedElement => {
     console.log("Removed from DB: ", removedElement._id);
     res.redirect('/movies/index');
   })
   .catch(err => {
     next(err);
   })
}
);


module.exports = router;