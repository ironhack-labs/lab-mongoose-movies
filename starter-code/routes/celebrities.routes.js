const express = require("express");
const router = express.Router();
Celebs = require("../models/celebrity.model");

router.get("/", (req, res) => {
  Celebs.find()
    .then(celebs => res.render("./celeb/celebrities", {
      celebs
    }))
    .catch(err => console.log("Ha habido un error: ", err))
})
router.get("/:id", (req, res) => {
  Celebs.findById(req.params.id)
    .then(celeb => res.render("./celeb/show", celeb))
    .catch(err => console.log("HA habido un error :S ", err))
})

module.exports = router;