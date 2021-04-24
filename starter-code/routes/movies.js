const { Router } = require("express");
const router = Router();
const Movie = require("../models/movie.model");

router.get("/movies", (req, res, next) => {
  
  Movie.find({})
  .then((movieFound) => {
    
    res.status(200).render("movies/index", { movieCard: movieFound });
  })
  .catch( (movieFoundError) => {
    console.error(`ERROR trying to list movies: ${movieFoundError}`);

    next(movieFoundError);
  })  
})

router.get("/movies/new", (req, res) => {
  res.status(200).render('movies/new');
})

router.post("/movies/new", (req, res, next) => {
  const { title, genre, plot } = req.body;
  
  Movie.create({ title, genre, plot })
  .then( ( resMovieCreated ) => {
    
    res.status(200).render('movies/show', { movieDetails: resMovieCreated });
  })
  .catch( createError => {
    console.error(`ERROR when creating Movie: ${createError}`);

    next(createError);
  })
})

router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;
    
  Movie.findById(id)
  .then((movieDetailsFound) => {

    res.status(200).render("movies/show", { movieDetails: movieDetailsFound });
  })
  .catch( (detailsFoundError) => {
    console.error(`ERROR trying to show details: ${detailsFoundError}`);

    next(detailsFoundError);
  })  
})

router.post("/movies/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Movie.findByIdAndRemove(id)
  .then((deleteMovie) => {

    res.status(200).render("movies/deleted", deleteMovie);
  })
  .catch( (deleteError) => {
    console.error(`ERROR trying to delete details: ${deleteError}`);

    next(deleteError);
  })  
})

router.get("/movies/:id/edit", (req, res) => {
  const { id } = req.params;
    
  Movie.findById(id)
  .then( (rslmovieFound) => {
    
    res.status(200).render("movies/edit", {rslmovieFound})
  })
  .catch( (err) => {
    console.error(`ERROR trying to find user by ID ${err}`);

    next(err);
  }) 
})

router.post("/movies/:id/edit", (req, res, next) => {
  const { id } = req.params.id;
  const { title, genre, plot } = req.body;
        
  Movie.findOneAndUpdate(
    { id }, 
    { title, genre, plot }, 
    { 
      new: true },
    (error, data) => {
      error ? console.error(error) : console.log(`//////>>>> ${data}`);
    })
  .then( ( movieEdited ) => {
    console.log(`//////////${movieEdited.id}`);
    // res.status(200).render('movies/show');
  })
  .catch( createError => {
    console.error(`ERROR when updating movie: ${createError}`);

    next(createError);
  })
})

module.exports = router;