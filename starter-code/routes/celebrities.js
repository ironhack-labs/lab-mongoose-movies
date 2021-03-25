const bodyParser = require("body-parser");
const express = require("express");
const app = require("../app");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then((allCelebs) => {
      res.render("./celebrities/index", allCelebs);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/new", (req, res, next) => {
  res.render("./celebrities/new");
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id).then((edit) => {
    res.render("./celebrities/edit", edit);
  });
});

router.post("/", (req, res) => {
  let newCelebrity = new Celebrity({
    name: req.body.celebName,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase,
  });
  newCelebrity
    .save()
    .then((result) => {
      res.redirect("./celebrities/");
    })
    .catch((err) => {
      console.log(err);
      res.render("./celebrities/new");
    });
});

router.post("/:id/delete", (req, res) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/celebrities/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((result) => {
      res.render("./celebrities/show", result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/:id", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, {
    name: req.body.celebName,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase,
  })
    .then((result) => {
      res.redirect("/celebrities/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
