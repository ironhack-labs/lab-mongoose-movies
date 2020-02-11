const express = require("express");
const router = express.Router();
const Celebrity = require("./../models/Celebrity");

router.post("/:id/delete", (req, res, next) => {
  const celebID = req.params.id;
  console.log("celebID :", celebID);
  Celebrity.findByIdAndDelete(celebID)
    .then(result => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

router.post("/", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(result => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      res.render("celebrities/new");
    });
});

router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.get("/:id", (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/show", { celeb });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  Celebrity.find()
    .then(celebrityArr => {
      res.render("celebrities/index", { celebrityArr });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
