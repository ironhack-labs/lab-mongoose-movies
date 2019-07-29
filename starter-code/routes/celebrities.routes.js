const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity.model"); // require the celebrity model

//! LIST OF CELEBRITIES
router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then(allTheCelebrities =>
      //console.log(allTheCelebrities)
      res.render("celebrities", { allTheCelebrities })
    )
    .catch(err => console.log("There was an error:", err));
});

//! CELEBRITY DETAILS
router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(fullCelebrity => res.render("celeb-show", { fullCelebrity }))

    .catch(err => {
      console.log("There was an error", err);
      next();
    });
});

//! CREATE NEW CELEBRITY
router.get("/create", (req, res, next) => res.render("celeb-new"));

router.post("/create", (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;

  Celebrity.create({ name, occupation, catchphrase })
    .then(() => res.redirect("/celebrities")) // me lleva de vuelta a la lista de celebrities
    .catch(err => console.log("Hubo un error:", err));
});

//! DELETE CELEBRITY
router.post("/:id/delete", (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId)
    .then(() => res.redirect("/celebrities"))
    .catch(err => console.log("Ha habido un error: ", err));
});

//! EDIT CELEBRITY
router.get("/:id/edit", (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(originalCeleb => res.render("celeb-edit", { originalCeleb }))
    .catch(err => console.log("Ha habido un error: ", err));
});

router.post("/:id/edit", (req, res, next) => {
  const celebrityId = req.params.id;
  const { name, occupation, catchphrase } = req.body;

  Celebrity.findByIdAndUpdate(celebrityId, { $set: { name, occupation, catchphrase } }, { new: true })
    .then(modedCeleb => {
      console.log(modedCeleb);
      res.redirect("/celebrities");
    })
    .catch(err => console.log("Hubo un error:", err));
});

module.exports = router;
