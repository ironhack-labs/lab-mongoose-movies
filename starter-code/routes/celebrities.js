const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET celebrity page */
router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(celebrity => {
      res.render("celebrities/index", { celebrity });
    })
    .catch(err => {
      res.render("celebrities/index");
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(dbRes => {
      console.log("create celebrity ok", dbRes);
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("create celebrity not ok", err);
      res.redirect("/new");
    });
});

module.exports = router;
