const Celebrity = require("../models/celebrity")
const express = require('express');
const router  = express.Router();

/* Viene desde el App.js y me devuelve todas las celebrities que hay en la bbdd */ 

router.get("/", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    res.render("celebrities/index", { celebrity }); // Esta línea es la que le pasa cosas a la celebrities.hbs
  } catch (err) {
    res.send(`Error al listar las Celebrity: ${err}`);
    next();
  }
});

/* Página de crear las Celebrities */

router.get("/new", (req, res, next) => {
    res.render("celebrities/new"); 
});

/* Envio del formulario de create a la bbdd */

router.post("/new", async (req, res, next) => {
  console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;
  const obj = await Celebrity.create({
    name,
    occupation,
    catchPhrase
  });
  console.log(obj);
  return res.redirect("/celebrities");
});

/* Según la celebrity por ID que quiera ver devuelvo todos sus datos */

router.get("/:id", async (req, res, next) => {
const { id } = req.params;
try {
  const celebridad = await Celebrity.findById(id);
  res.render("celebrities/show", { celebridad }); // Esta línea es la que le pasa cosas al show.hbs
} catch (err) {
  res.send(`Error al mostrar una celebrity: ${err}`);
  next();
}
});




/* Exporto un objeto "router" con todas las celebrities */

module.exports = router;


