const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movies", async (req, res, nxt) => {
  try {
    let movies = await Movie.find();
    //console.log(movies)
    res.render("movies/index.hbs", { movies });
  } catch (err) {
    nxt();
    console.log(err);
  }
});

router.get("/movies/:id", async (req, res, nxt) => {
  try {
    const { id } = req.params;
    console.log(id);
    let movie = await Movie.findById(id);
    console.log(movie);
    res.render("movies/show.hbs", movie);
  } catch (err) {
    nxt();
    console.log(err);
  }
});

router.get("/movies/new", async (req, res, nxt) => {
  try {
    res.render("movies/new.hbs");
  } catch (error) {
    nxt();
    console.log(error);
  }
});

router.post("/movies", async (req, res, nxt) => {
  try {
    const { title, genre, plot } = req.body;

    await Movie.create({ title, genre, plot });
    console.log(`Sucessfully added: ${title} to Movies DB`);
    res.redirect("/movies");
  } catch (error) {
    res.redirect("/movies");
  }
});

router.get("/movies/:id/delete", async (req, res, nxt) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.redirect("/movies");
  } catch (error) {
    nxt();
    console.log(error);
  }
});

router.get("/movies/:id/edit", async (req, res, nxt) => {
  try {
    const { id } = req.params;
    console.log(id);
    let movie = await Movie.findById(id);
    res.render("movies/edit.hbs", movie);
    console.log(movie);
  } catch (error) {
    nxt();
    console.log(error);
  }
});

router.post("/movies/:id", (req, res, nxt) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  console.log(id);
  console.log(req.body);
  Movie.findOneAndUpdate(id, { title, genre, plot }).then((result) => {
    console.log(`Sucessfully updated movie `);
    res.redirect("/movies");
  }).catch(error =>{
      nxt();
      console.log(error)})
});

module.exports = router;
