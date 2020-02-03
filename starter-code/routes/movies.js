const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

/* Get the Movies */
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movies.find();
    res.render("movies/", { movies });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

//Mostrar la lista ID de películas en películas
router.get("/show/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundObject = await Movies.findById(id);
    return res.render("movies/show", { foundObject });
  } catch (err) {
    return res.send(`error: ${err}`);
    next();
  }
});

// Mostrar Películas Nuevas
router.get("/new", async (req, res, next) => {
  try {
    return res.render("movies/new");
  } catch (err) {
    return res.send(`error: ${err}`);
    next();
  }
});

// Boton submit y formulario
router.post("/", async (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovies = new Movies({ title, genre, plot }); //Crear nueva entrada
  try {
    await newMovies.save();
    return res.redirect("/movies/");
  } catch (err) {
    console.log("este es el error", err);
    return res.render("movies/new");
    next();
  }
});

//Boton eliminar
router.post("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const foundObject = await Movies.findById(id);
    await Movies.findByIdAndRemove(foundObject);
    res.redirect("/movies/");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// Editar
router.get("/edit/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundObject = await Movies.findById(id);
    return res.render("movies/edit", { foundObject });
  } catch (err) {
    return res.send(`error: ${err}`);
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
    return res.redirect("/movies");
  } catch (err) {
    return res.send(`error: ${err}`);
    next();
  }
});

module.exports = router;