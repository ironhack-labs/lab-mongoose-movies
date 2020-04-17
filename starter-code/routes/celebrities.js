const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.js");

/* GET celebrities page */
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((dbResult) => {
      res.render("celebrities/index", { celebrities: dbResult });
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((dbResult) => {
      res.render("celebrities/show", { celebrity: dbResult });
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

router.post("/celebrities", (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
