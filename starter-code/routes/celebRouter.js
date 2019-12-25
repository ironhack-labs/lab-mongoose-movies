const express = require("express");
const router = express.Router();
const Celebrities = require("../models/Celebrities");
const app_name = require("../package.json").name;
const debug = require("debug")(`${app_name}:indexRouter`);

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrities.find()
    .then(index => {
      res.render("celebrities/index", { index });
    })
    .catch(() => {
      console.log("Football players not found");
      next();
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(show => {
      res.render("celebrities/show", { show });
    })
    .catch(() => {
      console.log("Details not found");
      next();
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/celebrities/:id/delete", (req, res, next) => {
  Celebrities.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/celebrities"))
    .catch(() => console.log("Football player was not deleted"))
  next();
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(edit=> {
      res.render("/celebrities/edit", { edit });
    })
    .catch(() => console.log("There was an error"))
  next();
});

router.post("/new", (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchPhrase;

  Celebrities.create({ name, occupation, catchPhrase })
    .then(celebrities => {
      console.log(`${celebrities.name} has been created`);
      res.redirect("/celebrities");
    })
    .catch(() => {
      res.render("/celebrities/new");
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchPhrase;
  celebrities
    .findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
    .then(() => res.redirect("/celebrities/" + req.params.id))
    .catch(() => console.log("Player was not updated"));
  next();
});

module.exports = router;
