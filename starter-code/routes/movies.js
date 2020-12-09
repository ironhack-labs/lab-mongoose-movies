const express = require("express");
const router = new express.Router();
const MovieModel = require("./../models/movie");


// GET - /movies  (READ ALL MOVIES)
router.get("/", async (req, res, next) => {
  try {
    // Call the Celebrity model's find method to retrieve all the celebrities.
    const movs = await MovieModel.find();
    // If there isn't an error, render the celebrities/index view.
    res.render("movies/index", { movs }); 
  } catch (err) {
    next(err);
  }
});

// // GET - /movies/new (CREATE)
router.get("/new", async (req, res, next) => {
    try {
      await MovieModel.findById(req.params.id); 
      res.render("movies/new"); 
    } catch (err) {
      next(err); 
    }
  });

//// GET - /movies/:id/edit (UPDATE)
router.get("/:id/edit", async (req, res, next) => {
    try {
      const moviesToUpdate = await MovieModel.findById(req.params.id);
      res.render("movies/edit", moviesToUpdate ); 
    } catch (err) {
      next(err);
    }
  });

// GET - /movies/:id (READ / SHOW DETAILS)
router.get("/:id", async (req, res, next) => {
    try {
      
      const movsid = await MovieModel.findById(req.params.id);
      res.render("movies/show", movsid ); 
    } catch (err) {
      next(err);
    }
  });

// // POST - /movies (CREATE)
router.post("/new", async (req, res, next) => {
    const movieToCreate = { ...req.body };
    console.log
    try {
        await MovieModel.create(movieToCreate);
        res.redirect("/movies");
      } catch (err) {
        next(err); 
      }
    });

 // POST - /movies/:id/delete (DELETE)   
router.post("/:id/delete", async (req, res) => {
    try {
      await MovieModel.findByIdAndRemove(req.params.id);
      res.redirect("/movies");
    } catch (err) {
      console.error(err);
    }
});



// POST - /movies/:id (UPDATE)
router.post("/:id", async (req, res) => {
    const movieInputToUpdate = { ...req.body };
    try {
      const updatedMovie = await MovieModel.findByIdAndUpdate(
        req.params.id,
        movieInputToUpdate,
        { new: true } // true: give me the updated documebnt back (default: false)
      );
      //console.log(updatedMovie);
      res.redirect("/movies");
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;