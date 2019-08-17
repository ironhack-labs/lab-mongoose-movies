const express = require(`express`);
const router  = express.Router();

// Require Movie model for CRUD operations
const Movie     = require("../models/Movie");
const Celebrity = require("../models/Celebrity");

/* GET movie list page  */
router.get('/movies', (req, res, next) => {
  Movie
    .find() // ALWAYS RETURNS AN ARRAY
    .then(moviesFromDB => res.render("movies/movies", { movies: moviesFromDB}))
    .catch(err => console.log("Error while getting the movies from the DB: ", err))
});

/* GET movie form  */
router.get(`/movies/add`, (req,res,next) => {
  Celebrity
    .find()
    .then(celebrities => res.render("movies/new-movies", {celebrities}))
    .catch((err) => console.log('Error while getting celebrities for new movie', err));
});


/* POST movie */
router.post("/movies/create", (req, res, next) => {
  // the "value" from option gets saved inside req.body object
  console.log("THE FORM:", req.body)
  Movie
    .create(req.body)
    .then( aNewMovie => console.log("new movie: ", aNewMovie,
    res.redirect('/movies'))) // redirect user to the movies/list 
    .catch(err => console.log("error creating movie: ", err,
    ))
});

/* GET movie details route */
router.get('/movies/details/:movieId', (req, res, next) => {

  const theID = req.params.movieId;
  Movie
    .findById(theID)
    .populate("cast") 
    .then(theMovie => {
      res.render('movies/movie-details', { theMovie });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});

/* GET edit movie route */
router.get(`/movies/:movieId/edit`, (req,res, next) => {
  
  const theID = req.params.movieId;
  Movie
    .findById(theID)
    .then((theMovie) => {

      Celebrity
        .find()
        .then(allCelebrities => {
          allCelebrities.forEach(celebrity => {
              theMovie.cast.forEach(actor => {
                  if(actor._id.equals(celebrity._id)){
                    celebrity.isActor = true;
                  }
              })
          });
          res.render("movies/edit-movie", { theMovie, allCelebrities });
        })
        .catch(err => console.log("Error while getting all the celebrities: ", err));
    
    })
    .catch((err) => {
        next(err)
    })
})

/* POST edit movies */
router.post("movies/:id", (req,res,next) => {

  Movie
  .findByIdAndUpdate(req.params.id, req.body) // find by id and pass the new req.body to replace previous document in the DB
  .then(res.redirect(`/movies`)) 
  .catch((err) => {
    next(err)
  })
})


/* POST delete movie */
router.post(`/movies/delete/:movieId`, (req, res, next) => {

  const theID = req.params.movieId;
  Movie
    .findByIdAndRemove(theID)
    .then(()=> {
      res.redirect(`/movies`)
    })
    .catch((err) => {
      next(err)
    })
})


// in order to use routes anywhere else in this application, we have to export them
module.exports = router;