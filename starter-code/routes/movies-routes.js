
const express = require("express");
const router = express.Router();
const movieModel = require("./../models/movie");

//Iteration 4  rendering the form to create the movie
router.get("/movies/new",function(req,res,next){
  
        res.render("movies/new-movies.hbs");
});

//Iteration 5 Adding New Movies

router.post("/movies/create", async (req, res, next) => {
    // this is the request body > an object containing the posted informations"
    console.log(req.body);
    // remember : keys are set on the HTML form with the name attributes !!!
    const { title,genre,plot,cast } = req.body; // destructuring syntax here !!!!
    console.log(title,genre,plot,cast);
   
    try {
      await movieModel.create({
        title,
        genre,
        plot,
        cast
      });
      res.redirect("movies/movies.hbs");
    } catch (err) {
      next(err);
    }
    
  });
   
  // Iteration  6 Listing Our Movies
  router.get("/movies", (req, res, next) => {
    
    movieModel.find()
      .then((dbRes) => {
        res.render("movies/movies.hbs", {
          movies: dbRes,
        });
      })
      .catch((dbError) => {
        next(dbError);
      });
  });

  //Iteration 7 The movie details
  router.get("movies/:id", (req, res, next) => {
    
    //console.log(req.params.id); 
  
    movieModel.findById(req.params.id).populate('celebrity')
   
      .then((oneMovie) => {
      
        res.render("movies/movie-details", {movieDetail: oneMovie});
        //console.log("console my movie", oneMovie);
      })
      .catch((dbError) => {
        next(dbError);
      });
  });
  
  router.get("/movies/:id/delete", (req, res, next) => {
      movieModel.findByIdAndRemove(req.params.id)
       .then(() => res.redirect("/movies"))
    .catch(next);
     });


  module.exports = router;