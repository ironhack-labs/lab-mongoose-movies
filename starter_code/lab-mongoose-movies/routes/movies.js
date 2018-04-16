const express = require('express');
const router  = express.Router();

const Movie = require("../models/movie");

// Route to Show all movies.
router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log({movies});
      res.render("movies/index", {movies});

    })
    .catch(error => {
      console.log(error)
    })
  
});


// ADD new movies
router.post('/', (req, res, next) => {
 
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie.save()
  .then((myMovie) => {  
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log ("Couldn't add new movie");
    res.redirect("/movies/new");
  })
});



/* GET home page */
router.get('/new', (req, res, next) => {
  res.render('movies/new');
});


// Route to Show a specific movie.
router.get('/:id', (req, res, next) => {
  let movieID = req.params.id;
  Movie.findOne({'_id': movieID})
  .then(movieInfo => {
    res.render("movies/show", {movieInfo})
  })
  .catch(error => {
    console.log("Error getting Movie by ID...")
  })
  
});

router.post('/:id/delete', (req, res, next) => {
  let movieID = req.params.id;
  Movie.findByIdAndRemove({'_id': movieID})
  .then(movieInfo => {
    res.redirect('/movies');
  })
  .catch(error => {
    console.log("Error deleting Movie by ID...")
    console.log(error);
  })
  
});

// Route to show an UPDATE form a specific celebrity.
router.get('/:id/edit', (req, res, next) => {
  let movieID = req.params.id;
  Movie.findOne({'_id': movieID})
  .then(movieInfo => {
    res.render("movies/edit", {movieInfo})
  })
  .catch(error => {
    console.log("Error getting Movie by ID...")
  })
  
});

// Route to UPDATE a specific celebrity.
router.post('/:id/edit', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const updates = { title, genre, plot };
  Movie.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/movies");
  });
});





module.exports = router;