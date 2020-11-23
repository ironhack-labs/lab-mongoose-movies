const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
    Movie.find()
      .then((moviesfromDB) => {
        console.log("...something....");
        console.log("found Movies: ", moviesfromDB);
        res.render("movies/index", { moviesfromDB });
      })
      .catch((err) => console.error("Error getting the movies", err)); //next()
  });

  //create new movie
  router.get("/movies/new", (req, res, next) => {
    res.render("movies/new");
  });

  //Post route for new movie
router.post("/movies", (req, res) => {
    const { title, genre, plot } = req.body;
    Movie.create({ title, genre, plot })
      .then((newMovie) => {
        console.log("New Movie:", newMovie);
        res.redirect("/movies");
      })
      .catch((err) => {
        console.log("error creating new Movie:", err);
        res.redirect("/movies/new");
      });
  });

/* GET Movies Details page by Id*/
router.get("/movies/:id", (req, res, next) => {
    const id = req.params.id;
    Movie.findById(id)
      .then((movieDetails) => {
        console.log("Movie Details: ", movieDetails);
        res.render("movies/show", { movieDetails });
      })
      .catch((err) =>
        console.error("Error getting the movies details page", err)
      );
  });

  //Edit movies
  router.get('/movies/:id/edit', (req, res) => {
    const id = req.params.id;
    Movie.findById(id)
      .then(movieToEdit => {
        console.log(movieToEdit);
        res.render('movies/edit', { movieToEdit });
      })
      .catch(error => console.log(`Error while getting a movie for edit: ${error}`));
  });
  
  router.post('/movies/:id/edit', (req, res) => {
    const  id  = req.params.id;
    //const { name, occupation, catchPhrase } = req.body;
   
    Movie.findByIdAndUpdate(id, req.body, { new: true })
    .then(updatedMovie => res.redirect(`/movies/${updatedMovie._id}`))
    .catch(error => console.log(`Error while updating a movie: ${error}`));
  });
  
  // Delete movies
  router.post('/movies/:id/delete', (req, res) => {
    const { id } = req.params;
   
    Movie.findByIdAndDelete(id)
      .then(() => res.redirect('/movies'))
      .catch(error => console.log(`Error while deleting a movie: ${error}`));
  });

module.exports = router;