var express = require("express");
const Movie = require("../models/movie");
var router = express.Router();


//mostrar
router.get("/movies", (req, res, next) => {
    Movie.find()
      .then((data) => {
        console.log("The data from the db is", { data });
        res.render("movies/index", { data });
      }) 
      .catch((err) =>
        console.log("Error while getting the movies from the DB: ", err)
      );
  });


//añadir 

router.get("/movies/new", (req, res, next) => {
    res.render("movies/new");
  });
  
  router.post("/movies", async (req, res, next) => {
    try {
      const { title, genre, plot } = req.body; 
      const movie = new Movie({ title, genre, plot }); 
      const newMovie = await movie.save();
      res.redirect("/movies");
    } catch (err) {
      console.log(
        "Error while creating the new movie, please, try again",
        err
      );
      res.redirect("/movies/new");
    }
  });


//borrar

router.post("/movies/:id/delete", (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
      .then((data) => {
        console.log("Movie successfully removed");
      })
      .catch((err) =>
        console.log("Error while getting the movie from the DB: ", err)
      );
    res.redirect("/movies");
  });

  
//editar 

router.get("/movies/:id/edit", (req, res, next) => {
    Movie.findById(req.params.id)
      .then((data) => {
        //console.log('The data from the db is' , {data})
        res.render("movies/edit", { data })
      })
      .catch((err) =>
            console.log("Error while editing: ", err)
          );
      });
    
  
  router.post("/movies/:id", (req, res, next) => {
      const {title, genre, plot} = req.body;
      Movie.update({_id:req.params.id}, { $set: { title, genre, plot }}, { new: true  } )
  
      .then((data) => {
        res.redirect("/movies");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  
//encontrar por id

router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
      .then((data) => {
        console.log("The data from the db is", { data });
        res.render("movies/show", { data });
      })
      .catch((err) =>
        console.log("Error while getting the movies from the DB: ", err)
      );
  });
  






module.exports = router;