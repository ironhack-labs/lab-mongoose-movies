const express = require("express");
const router = express.Router();
const Celeb = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res) => {
  Celeb.find({})
    .then(documents => {
      res.render("celebrities/index", { celebrities: documents });
    })
    .catch(err => console.log(err));
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res) => {
  Celeb.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(newStar => {
      res.redirect("/celebrities");
    })
    .catch(err => console.log(err));
});

router.post("/celebrities/:id/delete", (req, res) => {
  Celeb.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => console.log(err));
});

router.get("/celebrities/:id/edit", (req, res) => {
  console.log("get edit mehtod!!!!");
  Celeb.findById(req.params.id)
    .then(star => {
      res.render("celebrities/edit", { star });
    })
    .catch(err => console.log(err));
});

router.post("/celebrities/:id/edit", (req, res) => {
  Celeb.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(star => {
      res.redirect("/celebrities/" + star._id);
    })
    .catch(err => console.log(err));
});

router.get("/celebrities/:id", (req, res) => {
  Celeb.findById(req.params.id)
    .then(star => {
      res.render("celebrities/show", { star });
    })
    .catch(err => console.log(err));
});
module.exports = router;
