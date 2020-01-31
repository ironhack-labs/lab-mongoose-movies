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

/* Según la celebrity por ID que quiera ver devuelvo todos sus datos */

router.get("/:id", async (req, res, next) => {
const { id } = req.params;
try {
  const celebridad = await Celebrity.findById(id);
  res.render("celebrities/show", { celebridad }); // Esta línea es la que le pasa cosas al .hbs
} catch (err) {
  res.send(`Error al mostrar una celebrity: ${err}`);
  next();
}
});


/* Exporto un objeto "router" con todas las celebrities */

module.exports = router;


