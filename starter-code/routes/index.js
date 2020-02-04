const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(celebrityList => {
      //res.send(celebrityList);
      res.render("./celebrities/index", {
        celebrities: celebrityList
      });
    })
    .catch(err => console.error(err));
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("./celebrities/new");
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      //res.send(celebrityList);
      res.render("./celebrities/show", celebrity);
    })
    .catch(err => console.error(err));
});
router.post("/celebrities", (req, res, next) => {
  Celebrity.create(req.body)
    .then(celebrity => {
      res.redirect(`/celebrities/${celebrity._id}`);
    })
    .catch(err => console.log(err));
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.deleteOne({ _id: req.params.id })
    .then(celebrity => {
      res.redirect(`/celebrities`);
    })
    .catch(err => console.log(err));
});
module.exports = router;
