const express = require("express");
const movieModel = require("../models/movie");
const router = new express.Router();

//DISPLAY ALL MOVIES OK
router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await movieModel.find();
    res.render("movies/index", { allMovies });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// //SEND TO THE PAGE FORM CREATE
router.get("/movies/new", (req, res) => {
  console.log("hello");
  res.render("movies/new");
});

//DISPLAY ONE MOVIE OK
router.get("/movies/:id", async (req, res, next) => {
  try {
    const oneMovie = await movieModel.findById(req.params.id);
    res.render("movies/show", oneMovie);
    console.log(oneMovie);
  } catch (err) {
    next(err);
  }
});

// //FORM CREATE AND SEND BACK TO FULL LIST
router.post("/movies", async (req, res, next) => {
  try {
    await movieModel.create(req.body);
    res.redirect("/movies");
  } catch (err) {
    res.render("movies/new");
    next(err); // express will display the error on the provided error page (error.hbs) (check the www file for details ....)
  }
});

// //DELETE ONE MOVIE OK
router.post("/movies/:id/delete", async (req, res, next) => {
  try {
    const deletedMovie = await movieModel.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    res.render("movies/new");
    next(err); // express will display the error on the provided error page (error.hbs) (check the www file for details ....)
  }
});

// // SEND TO THE PAGE EDIT ONE MOVIE OK
router.get("/movies/:id/edit", async (req, res, next) => {
  try {
    const editMovie = await movieModel.findById(req.params.id);
    res.render("movies/edit", editMovie);
  } catch (err) {
    next(err); // express will display the error on the provided error page (error.hbs) (check the www file for details ....)
  }
});

// // FORM EDIT ONE CELEBRITY OK

router.post("/movies/:id", async (req, res) => {
  try {
    const updatedMovie = await movieModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // true: give me the updated documebnt back (default: false)
    );
    console.log(updatedMovie);
    res.redirect("/movies");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
