const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(celebrities => res.render("celebrities", {celebrities}))
    .catch(err => console.log(err));
});

router.get("/celebrities/:id", (req, res) => {
  console.log(req.params.id);
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render("celebrities/cb_details", celebrity))
    .catch(err => console.log(err))
})

module.exports = router;
