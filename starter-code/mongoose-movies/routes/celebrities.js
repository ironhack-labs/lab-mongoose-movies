const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET celebrities list */
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render("celebrities/index", {celebrities}))
    .catch(e => next(e));
});

/* GET celebrity details */
router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render("celebrities/show", {celebrity}))
    .catch(e => next(e));
});

module.exports = router;
