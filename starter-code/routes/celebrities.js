const express = require("express");
const Celebrity = require("../models/Celebrity.model.js");
const router = express.Router();

router.get("/", (req,res,next) => {
    Celebrity.find({})
    .then((celebrities) => res.render("celebrities/index", { celebrities }))
    .catch((error) => next(error));
});

router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    Celebrity.findById(id)
    .then((celebrity) => res.render("celebrities/show", celebrity))
    .catch((error) => next(error));
})


module.exports = router;