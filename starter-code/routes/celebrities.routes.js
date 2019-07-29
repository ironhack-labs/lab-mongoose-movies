const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity.model");

router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then(allTheCelebrities =>
      res.render("celebrities/index", { celebrities: allTheCelebrities })
    )
    .catch(err => console.log("Ha ocurrido un error", err));
});

router.get("/show/:id", (req, res, next) => {
  //ruta
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(allTheId => res.render("celebrities/show", { celebrities: allTheId }))
    .catch(err => console.log("Hubo un error:", err));
});

module.exports = router;
