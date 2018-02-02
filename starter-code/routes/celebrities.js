const express = require("express");

// require the Celebrity model here

const router = express.Router();
const Celebrity = require("../models/celebrity");

// CRUD -> READ LIST OF CELEBRITIES
router.get("/", (req, res) => {
  Celebrity.find().exec((err, celebrities) => {
    res.render("celebrities/index", {
      celebrities: celebrities
    });
  });
});

/* CRUD -> READ DETAIL OF CELEBRITIES. AQUI VENÍA TAMBIEN EL EJEMPLO DE MARC CON LAS ESTRELLAS */
router.get("/celebrities/:id", (req, res) => {
  const celebId = req.params.id;

  Celebrity.findById(celebId).exec((err, celebrity) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/show", { celebrity: celebrity });
  });
});

/*
router.get('/new', (req, res) => {
  res.render("drones/new");
});

router.post('/new', (req, res, next) => {
  const {name,propellers,maxSpeed} = req.body;
  const drone = new Drone({name,propellers,maxSpeed});
  drone.save(err => {
    if(err){return next(err)}
    res.redirect("/");
  })
});
*/
module.exports = router;
