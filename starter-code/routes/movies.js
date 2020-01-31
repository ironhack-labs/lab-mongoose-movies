//Iteration #2
const express = require("express");
const router = express.Router();
const movie = require("../models/movie");

// CRUD -> (R) Retrieve - el GET es donde lo pinto y el render es lo que pinto
router.get("/", async (req, res, next) => {
  try {
    const Movies = await movie.find();
    res.render("movies/index", { Movies });
  } catch (err) {
    res.send(`error: ${err}`);//Con res.send mostramos el error en el navegador
    next();
  }
});

// CRUD -> (C) Create: Show form - Page to create new movies
router.get("/new", (req, res, next) => {
  return res.render("movies/new");

});
router.post("/new", async (req, res, next) => {
  const { title, genre, plot } = req.body; //Coge los parámetros del formulario
  const obj = await movie.create({
    title,
    genre,
    plot,
  });
  console.log(obj);
  res.redirect("/movies");
});

// CRUD -> (R) Retrieve - Show the list movies ID in movies/show 
router.get("/show/:id", async (req, res, next) => {
  try {
    //const id  = req.params.id;
    const { id } = req.params;
    const foundObjFromId = await movie.findById(id);
    return res.render("movies/show", { foundObjFromId });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// CRUD -> (U) Update/Edit the object in db
router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const obj = await movie.findById(id);
  return res.render("movies/edit", { obj, isUpdate: true });
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  await movie.findByIdAndUpdate(id, {
    title,
    genre,
    plot
  });
  res.redirect("/movies");
});

// CRUD -> (D) Delete the object in database with route params
router.get("/delete/:id", async (req, res, next) => {
  try {
    //const id  = req.params.id;
    const { id } = req.params;
    await movie.findByIdAndRemove(id);
    res.redirect("/movies/");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});
module.exports = router;