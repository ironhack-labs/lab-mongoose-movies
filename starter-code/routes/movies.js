const express = require('express');
const router = express.Router();
const moviesModel = require('../models/Movies'); // create this variable to call our db collection

//iteration 8: GET movies page
router.get('/movies', (req, res, next) => { // url adress
  moviesModel
    .find()
    .then(dbRes => {
      res.render('movies/index', {
        moviesDisplay: dbRes
      });
    })
    .catch(error => {
      next(); // not sure about that
      console.log("error while retrieving movies view", error);
    });
});

// iteration 12: needs 2 routes:
// 1) for rendering the form where the user can fill all the info about a new movie
router.get('/movies/:id/update', (req, res, next) => {
  moviesModel
    .findOne({
      "_id": req.params.id
    })
    .then(movie => {
      console.log(movie);
      res.render('movies/update', { // render the update.hbs ...
        movieUpdate: movie // ... with all the infos on the form from the movie
      });
    });

});



//iteration 9 : movies details
router.get('/movies/:id', (req, res, next) => {
    moviesModel
      .findOne({
        "_id": req.params.id // id = property of params which is property of req
      })
      .then(movie => {
        res.render('movies/show', { // render the show.hbs file
          movieShow: movie // movieShow renders an object and will let us to access its data in the show.hbs file
        });
        //console.log(movie); // movie is the object selected in the db when clicking
      })
      .catch(error => {
        next();
        console.log("error while retrieving show of a movie", error);
      });
  }

);

// iteration 10 : needs 2 routes :
// 2) for getting the data about the movie and add it to the database
router.post('/movies', (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body;
  // Create an instance of the Movie model with the object you made in the previous step:
  const newMovie = new moviesModel({
    title,
    genre,
    plot
  });
  console.log(newMovie);

  newMovie
    .save()
    .then((movie) => {
      res.redirect('movies'); // redirect to the list of the movies
    })
    .catch((error) => {
      res.render('movies/new'); // render the movies/view so the user can try again
      console.log(error);
    });
});


// iteration 11 : delete a movie

router.post('/movies/:id/delete', (req, res, next) => {
  moviesModel
    .findByIdAndRemove({
      "_id": req.params.id
    })
    .then((movie) => {
      res.redirect('/movies');
      // need to put the "/" here otherwise I get "error 404" because the url is /movies/(id)/movies
    })
    .catch((error) => {
      next();
      console.log(error);
      return error;
    });
});

// iteration 12 (bonus) : needs 2 routes :
// 2) for receive the data from the form and add it to the database
router.post('/movies/:id/update', (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body;

  moviesModel
    .update({
      _id: req.params.id // id or _id or movie/id ?
    }, {
      $set: {
        title,
        genre,
        plot
      }
    })
    .then((movie) => {
      res.redirect('/movies'); // redirect to the list of the movies
    })
    .catch((error) => {
      next();
      console.log("can't edit the id", error);
    });
});

console.log("inside the movies.js file !");

module.exports = router;