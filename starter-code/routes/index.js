const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities/index", (req, res, next) => {
  Celebrity.find({})
    .then(celebrityDoc => {
      res.render("celebrities/index.hbs", { celebrityList: celebrityDoc });
      // console.log(celebrityDoc);
      // res.json(celebrityDoc);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/add", (req, res, next) => {
  res.render("celebrities/celebrityAdd.hbs");
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrityData => {
      res.render("celebrities/celebrityDetails.hbs", celebrityData);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/index", (req, res, next) => {
  console.log(req.body);
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(createdCelebrity => {
      console.log(createdCelebrity);
      res.redirect(`/celebrities/${createdCelebrity._id}`);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect(`/celebrities/index`);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
