const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

// Show the list movies in movies/index
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movies.find();
    res.render("movies/index", { movies });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// // Show the list movies ID in movies/show
router.get("/show/:id", async (req, res, next) => {
  try {
    //const id  = req.params.id;
    const { id } = req.params;
    const foundObjFromId = await Movies.findById(id);
    res.render("movies/show", { foundObjFromId });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// Show the list movies in movies/new
router.get("/new", async (req, res, next) => {
  try {
    res.render("movies/new");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// Create: Submit & Process form data
router.post("/", async (req, res, next) => {
  //console.log("req.body:", req.body);
  const { title, genre, plot } = req.body;
  const addMovies = new Movies({ title, genre, plot }); //Crear nueva entrada
  try {
    //Crear objeto .create()
    // await movies.create({
    //   title,
    //   genre,
    //   plot
    // });
    await addMovies.save(); //Guardar objeto .save()
    res.redirect("/movies/");
  } catch (err) {
    console.log("este es el error", err);
    res.render("movies/new");
    next();
  }
});

//Delete the object in database with route params
router.post("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const foundObjFromId = await Movies.findById(id);
    await Movies.findByIdAndRemove(foundObjFromId);
    res.redirect("/movies/");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// Show the list movies in movies/edit
router.get("/edit/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundObjFromId = await Movies.findById(id);
    res.render("movies/edit", { foundObjFromId });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

//Editar y actualizar el dato
router.post("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, genre, plot } = req.body;
    await Movies.findByIdAndUpdate(id, {
      title,
      genre,
      plot
    });
    res.redirect("/movies");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

module.exports = router;
