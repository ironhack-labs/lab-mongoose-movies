const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");


//show all db movies
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render("movies/index", { movies });
  } catch (err) {
    console.error(err);
    next();
  }
});

//get for a new movie
router.get("/new", async (req, res, next) => {
  return res.render("movies/new");
});

//create a new movie
router.post("/", async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;
    const obj = await Movie.create({ title, genre, plot });
    console.log(`Add new movie in db ${obj}`);
    res.redirect("/movies");
  }catch (err) {
    console.log(err);
    res.render("movies/new");
  }
});

//show details of a movie
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const details = await Movie.findById(id);
    console.log(details);
    res.render("movies/show", { details });
  } catch (err) {
    console.error(err);
    next();
  }
});

//delete movies
router.post("/delete/:id", async (req,res,next) => {
  try{
    const { id } = req.params;
    await Movie.findByIdAndRemove(id);
    res.redirect("/movies");
  } catch(err){
    console.log(err);
    next();
  }


});

//edit movies GET
router.get("/edit/:id", async (req,res,next) => {
  try{
    const { id } = req.params;
    const obj = await Movie.findById(id);
    res.render("movies/edit",{obj});
  } catch(err){
    console.log(err);
    next();
  }
});

//edit movies POST
router.post("/edit/:id", async (req, res,next) => {
  try{
    const { id } = req.params;
    const { title, genre, plot } = req.body;
    const obj = await Movie.findByIdAndUpdate(id, {
      title,
      genre,
      plot
    });
    res.redirect("/movies");
  }catch(err){
    console.log(err);
    next();
  }
  
  
});






module.exports = router;
