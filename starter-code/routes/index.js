const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res) => {
  const { name, ocupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({
    name: name,
    ocupation: ocupation,
    catchPhrase: catchPhrase
  });
  newCeleb
    .save()
    .then(() => {
      res.redirect("celebrities");
    })
    // .then(celebrities => {
    //   res.render("celebrities/index", { celebrities });
    // })
    .catch(error => {
      console.log(error);
      res.render("/celebrities/new");
    });
});

router.get("/celebrities/:celebId", (req, res) => {
  Celebrity.find({
    _id: req.params.celebId
  })
    .then(celebrities => {
      res.render("celebrities/show", { celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/celebrities/:celebId/delete", (req, res) => {
  Celebrity.findByIdAndRemove({
    _id: req.params.celebId
  })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
