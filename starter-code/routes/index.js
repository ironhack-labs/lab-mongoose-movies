const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res) => {
  Celebrities.find()
    .then(celebrity => res.render("celebrities/index", { celebrity }))
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/show/:id", (req, res) => {
  let celebrity = req.params.id;
  Celebrities.find({ _id: celebrity })
    .then(celebrity => {
      res.render("celebrities/show", celebrity[0]);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/new/", (req, res) => {
  res.render("celebrities/new");
});

router.post("/celebrities-create", (req, res) => {
  Celebrities.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(celebrityCreated => {
    celebrityCreated.save(err => {
      if (err) {
        res.render("celebrities/new", {
          errorMessage: "Something went wrong. Try again later."
        });
        return;
      }
      res.redirect("celebrities");
    });
  });
});

module.exports = router;
