const express = require("express");
const Celebrity = require("../models/Celebrity.model.js");
const router = express.Router();

router.get("/", (req, res) => {
  Celebrity.find({})
  .then((celebrities) => {
    res.render("celebrities/index", {celebrities})
  })
  .catch((error) => console.error(error))
})

router.get("/:id", (req, res) => {
  const {id} = req.params;
  Celebrity.findById(id)
  .then((celebrity) => {
    res.render("celebrities/show", celebrity)
  })
  .catch((error) => console.error(error))
})

module.exports = router;