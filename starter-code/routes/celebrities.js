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

/* Exporto un objeto "router" con todas las celebrities */

module.exports = router;


