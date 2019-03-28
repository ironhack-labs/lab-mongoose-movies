const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// index, get collection of movies
router.get("/", (req, res) => {
  Movie.find().then(movies => {
    console.log(`Se recuperaron ${movies.length} peliculas`);
    // se omite el primer / al entrar en una carpeta
    res.render("movies/index", { movies });
  });
});

//creating a movie
router.get("/new", (req, res) => {
  console.log(`Entrando a vista para crear pelicula`);
  res.render("movies/edit");
});

/*

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
IMPORTANT
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    route params must be after static routes, otherwise
    the route becomes a route param
*/

// detail of a single movie
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Movie.findById(id).then(movie => {
    console.log(`Se recupero pelicula con id: ${id}`);
    // se omite el primer / al entrar en una carpeta
    res.render("movies/show", movie);
  });
});

// editing a movie
router.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  Movie.findById(id).then(movie => {
    console.log(`Se recupero pelicula con id: ${id} para edicion`);
    // se omite el primer / al entrar en una carpeta
    res.render("movies/edit", movie);
  });
});

router.post("/", (req, res) => {
  Movie.create(req.body)
    .then(movie => {
      console.log("Pelicula creada", movie);
      res.redirect("/movies");
    })
    .catch(err => {
      console.log(`Error al insertar pelicula`);
    });
});

router.post("/:id/edit", (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndUpdate(id, { $set: { ...req.body } })
    .then(movie => {
      console.log(`Se ha actualizado pelicula con id ${id}`);
      res.redirect(`/movies/${id}`);
    })
    .catch(err => {
      console.log(`Error al actualizar pelicula con id ${id}`);
    });
});

router.post("/:id/delete", (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndRemove(id)
    .then(movie => {
      console.log(`Se ha eliminado pelicula con id ${id}`);
      res.redirect(`/movies`);
    })
    .catch(err => {
      console.log(`Error al eliminar pelicula con id ${id}`);
    });
});

module.exports = router;
