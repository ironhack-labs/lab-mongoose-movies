const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

// Home
router.get("/", (req, res, next) => {
  res.render("index");
});

// Getting Celeb
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities", { celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

// Celeb details
router.get("/celebrity/:id", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({ _id: celebrityId })
    .then(showCelebrities => {
      res.render("showCelebrities", { showCelebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

// Adding a new Celeb
router.get("/newCelebrities", (req, res) => {
  res.render("newCelebrities");
});

router.post("/newCelebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  const celebrity = new Celebrity({ name, occupation, catchPhrase });
  celebrity.save().then(book => {
    console.log(celebrity);
    res.redirect("/celebrities");
  });
});

// Removing a Celeb
router.post("/celebrity/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(error);
    });
});


module.exports = router;
