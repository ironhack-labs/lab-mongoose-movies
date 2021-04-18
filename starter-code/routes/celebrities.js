const express = require("express");
const Celebrity = require("../models/Celebrity.model.js");
const router = express.Router();

router.get("/", (req,res,next) => {
    Celebrity.find({})
    .then((celebrities) => res.render("celebrities/index", { celebrities }))
    .catch((error) => next(error));
});



module.exports = router;