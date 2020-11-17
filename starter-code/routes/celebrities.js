const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity.model");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities/index", { celebrities });
    })
    .catch((error) =>
      console.log("Error while getting the celebrities from the DB: ", error)
    );
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => {
      console.log("celebrity", celebrity);
      res.render("celebrities/show", { celebrity });
    })
    .catch((error) =>
      console.log("Error while getting the celebrity from the DB: ", error)
    );
});

module.exports = router;
