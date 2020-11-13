const express = require ("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.Model");

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
    .then(celebsFromDB => {
        res.render("./celebrities/index.hbs", {celebrities: celebsFromDB})
    })
    .catch((error) => {
        next(error);
      });
});

router.get("/celebrities/new", (req, res) => 
res.render("celebrities/new"));

router.post("/celebrities", (req, res) => {
    const { name, occupation, catchphrase } = req.body;
  
    const newCeleb = new Celebrity({ name, occupation, catchphrase });
  
    newCeleb
      .save()
      .then(() => res.redirect("/celebrities"))
      .catch(() => {
        res.render("celebrities/new");
      });
  });

router.get('/celebrities/:id', (req, res, next) => {
    const { id } = req.params;

    Celebrity.findById(id)
    .then(foundCeleb => {
        res.render("./celebrities/show", {foundCeleb})
    })
    .catch((error) => {
        next(error);
      });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
    const { id } = req.params;
  
    Celebrity.findByIdAndDelete(id)
      .then(() => res.redirect("/celebrities"))
      .catch((error) => next(error));
  });


module.exports = router;


