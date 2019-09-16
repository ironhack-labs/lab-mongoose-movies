const express = require("express");
const router = express.Router();
const Celebrities = require("../models/Celebrities");
const hbs = require("hbs");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

router.get("/celebrities", (req, res, next) => {
  Celebrities.find()
    .then(allCelebrities => {
      res.render("./celebrities/index", { allCelebrities });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/show/:celebrityId", (req, res, next) => {
  Celebrities.findById(req.params.celebrityId)
    .then(celebrity => {
      res.render("./celebrities/show", { celebrity });
    })
    .catch(error => {
      console.log("Error", error);
      next(error);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  if (req.query.error) {
    res.render("./celebrities/new", {
      error: "Invalid celebrity"
    });
  }
  res.render("./celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  if (celebrityValidator(req.body)) {
    Celebrities.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    }).then(newCelebrity => {
      res.redirect("/celebrities");
    });
  } else {
    res.redirect("/celebrities/new?error=invalid-celebrity");
  }
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrities.findByIdAndRemove(req.params.id)
  .then(deleted => {
    res.redirect("/celebrities");
  })
  .catch(error=> next(error));
});

router.get("/celebrities/:id/edit", (req, res, next) => {
console.log("eeeeeeee")
  Celebrities.findById(req.params.id)
  .then(finded => {
    res.render("./celebrities/edit", {finded});
  });
});

router.post("/celebrities/:id", (req, res, next) => {
  Celebrities.findByIdAndUpdate(req.params.id, req.body)
  .then(edited => {
    res.redirect("./celebrities");
  });
});

function celebrityValidator(req) {
  const regName = /(?=.*[a-z])(?=.{3,})/;
  const regOccupation = /(?=.*[a-z])(?=.{3,})/;
  const regCatchPhrase = /(?=.*[a-z])(?=.{6,})/;
  const { name, occupation, catchPhrase } = req;
  return (
    regName.test(name) &&
    regOccupation.test(occupation) &&
    regCatchPhrase.test(catchPhrase)
  );
}

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Error! cannot retrieve data");
});
module.exports = router;
