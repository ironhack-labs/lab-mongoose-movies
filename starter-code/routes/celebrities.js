const express = require("express");
const Celebrity = require("../models/celebrity.js");
const router = express.Router();

router.get("/", (req, res, next) => {
    Celebrity.find({})
        .then((celebrities) => {
            res.render("celebrities/index", { celebrities });
            console.log('celebrities', celebrities);
        })
        .catch((error) => next(error));
});

router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    Celebrity.findById(id)
        .then((celebrity) => res.render("celebrities/show", celebrity))
        .catch((error) => next(error));
});

module.exports = router;