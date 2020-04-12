const express = require("express");
const router = express.Router();
const Celeb = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// new star
router.get("/new-star", (req, res) => {
  res.render("stars/new-star");
});

router.post("/stars", (req, res) => {
  let newStar = new Celeb({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  });

  console.log(newStar);

  newStar
    .save()
    .then(() => {
      res.redirect("/stars");
    })
    .catch((error) => {
      res.redirect("/new-star");
      console.log("An error happened while saving a new user:", error);
    });
});


// delete star
router.post("/stars/delete/:identifier", (req, res, next) => {
  Celeb.findByIdAndRemove(req.params.identifier).then(() => {
    res.redirect("/stars")
  })

});

module.exports = router;
