const express = require("express");
const router = express.Router();
Celebs = require("../models/celebrity.model");

router.get("/", (req, res) => {
  Celebs.find()
    .then(celebs =>
      res.render("./celeb/celebrities", {
        celebs
      })
    )
    .catch(err => console.log("Ha habido un error: ", err));
});

router.post("/", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  if (name.length && occupation.length && catchPhrase) {
    Celebs.create({ name, occupation, catchPhrase })
      .then(newCeleb => res.redirect("celebrities"))
      .catch(err => res.render("celeb/new"));
  } else {
    res.send("<h1>Buen intento we, pero no</h1>");
  }
});

router.get("/new", (req, res) => {
  res.render("celeb/new");
});

router.get("/:id", (req, res) => {
  Celebs.findById(req.params.id)
    .then(celeb => res.render("./celeb/show", celeb))
    .catch(err => console.log("HA habido un error :S ", err));
});

router.post("/:id", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebs.findByIdAndUpdate(
    req.params.id,
    { name, occupation, catchPhrase },
    { new: true }
  )
    .then(UpdatedCeleb => res.redirect(`/celebrities/${UpdatedCeleb._id}`))
    .catch(err => console.log("An error have occurred: ", err));
});

router.post("/:id/delete", (req, res) => {
  Celebs.findByIdAndDelete(req.params.id)
    .then(x => res.redirect("/celebrities"))
    .catch(err => console.log("An error have ocurred: ", err));
});

router.post("/:id/edit", (req, res) => {
  Celebs.findById(req.params.id)
    .then(celeb => res.render("celeb/edit", celeb))
    .catch(err => console.log("Ha ocurrido un error: ", err));
});

module.exports = router;
