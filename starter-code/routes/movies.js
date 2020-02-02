const express = require("express");
const router = express.Router();
const movie = require("../models/movies");

/*GET  Iteration 2*/
router.get("/", async (req, res, next) => {
  const movies = await movie.find();
  res.render("movies/index", { movies });
});

/*GET Iteration 4*/

router.get("/new", async (req, res, next) => {
  res.render("movies/new");
});

router.post("/new", async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;
    const obj = await movie.create({ title, genre, plot });
    res.redirect("/movies");
  } catch (error) {
    res.render("/movies/new");
  }
});

/*GET Iteration 3*/

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = await movie.findById(id);
    res.render("movies/show", { obj });
  } catch (error) {
    console.log(`ERROR ${error}`);
  }
});

/*GET Iteration 5*/

router.post("/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movies = await movie.findByIdAndRemove(id);
    res.redirect("/movies");
  } catch (error) {
    console.log(`Error ${error}`);
  }
});

/*GET Iteration 6*/

router.get("/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movies = await movie.findById(id);
    res.render("movies/edit", { movies });
  } catch (error) {
    console.log(`Error ${error}`);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, genre, plot } = req.body;
    const movies = await movie.findByIdAndUpdate(id, {
      title,
      genre,
      plot
    });
    res.redirect("/movies");
  } catch (error) {
    console.log(`Error ${error}`);
  }
});

module.exports = router;
