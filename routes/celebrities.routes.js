const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity.model");

// /famosas

// List of celebrities

router.get("/listado", (req, res) => {
  Celebrity.find({}) //retorna un array de objetos
    .then((celebrities) => res.render("celeb-list", { celebrities }))
    .catch((err) => console.log("ERROR:", err));
});

// Details by id

router.get("/detalles/:celeb_id", (req, res) => {
  const id = req.params.celeb_id;

  Celebrity.findById(id) //retorna un objeto
    .then((celebDetails) => res.render("celeb-det", celebDetails))
    .catch((err) => console.log("ERROR:", err));
});

// New celebrity form

router.get("/nueva", (req, res) => res.render("new-celeb-form"));

router.post("/nueva", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect("/famosas/listado"))
    .catch((err) => console.log("ERROR: ", err));
});

//Delete celeb

router.get("/borrar/:celeb_id", (req, res) => {
  const id = req.params.celeb_id;

  Celebrity.findByIdAndDelete(id)
    .then(() => res.redirect("/famosas/listado"))
    .catch((err) => console.log("ERROR: ", err));
});

//Edit celebs form
router.get("/editar/", (req, res) => {
  const id = req.query.celeb_id;

  Celebrity.findById(id) //retorna un objeto
    .then((celebDetails) => res.render("edit-celeb-form", celebDetails))
    .catch((err) => console.log("ERROR:", err));
});

router.post("/editar/:celeb_id", (req, res) => {
  const id = req.params.celeb_id;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate(
    id,
    { name, occupation, catchPhrase },
    { new: true }
  )
    .then(() => res.redirect("/famosas/listado"))
    .catch((err) => console.log("ERROR: ", err));
});

module.exports = router;
