const Movies = require("../models/movies");
const express = require("express");
const router = express.Router();

/* Viene desde el App.js y me devuelve todas las movies que hay en la bbdd */

router.get("/", async (req, res, next) => {
  try {
    const movies = await Movies.find();
    return res.render("movies/index", { movies }); // Esta línea es la que le pasa cosas a la movies.hbs
  } catch (err) {
    res.send(`Error al listar las Películas: ${err}`);
    next();
  }
});

/* Página de crear las fichas de Películas */

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

/* Envio del formulario de create a la bbdd */

router.post("/new", async (req, res, next) => {
  // console.log(req.body);
  const { title, genre, plot } = req.body;
  const obj = await Movies.create({
    title,
    genre,
    plot
  });
  // console.log(obj);
  return res.redirect("/movies");
});

// Borrar Pelicula

router.post("/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const película = await Movies.findByIdAndRemove(id);
    return res.redirect("/movies"); // Esta línea es la que le pasa cosas al show.hbs
  } catch (err) {
    res.send(`Error al borrar una película: ${err}`);
    next();
  }
});

// Ir a la página de Editar Pelicula

router.get("/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const pelicula = await Movies.findById(id);
    return res.render("movies/edit", { pelicula });
  } catch (err) {
    res.send(`Error: ${err}`);
    next();
  }
});

// Guardar la página de Editar Película, osea, editar la Película

router.post("/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  try {
    await Movies.findByIdAndUpdate(id, {
      title,
      genre,
      plot
    });
    return res.redirect("/movies");
  } catch (err) {
    res.send(`Error: ${err}`);
    next();
  }
});

/* Según la pelicula por ID que quiera ver devuelvo todos sus datos */

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movies.findById(id);
    return res.render("movies/show", { movie }); // Esta línea es la que le pasa cosas al show.hbs
  } catch (err) {
    res.send(`Error al mostrar una pelicula: ${err}`);
    next();
  }
});

/* Exporto un objeto "router" con todas las peliculas */

module.exports = router;
