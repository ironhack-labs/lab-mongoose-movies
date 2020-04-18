const express = require("express");
const router = express.Router();

const Celeb = require("../models/celebrity");

// show all celebrities

router.get("/", (req, res, next) => {
  Celeb.find()
    .then((celebs) => {
      let obj = { allCelebs: celebs };

      res.render("stars/index", obj);
      // .catch((err) => console.log("Error while doing something", error));
    })
    .catch((error) =>
      console.log("An error happened while saving a new user:", error)
    );
});

// show one celeb

router.get("/:identifier", (req, res, next) => {
  Celeb.findOne({ _id: req.params.identifier })
    .then((celeb) => {
      console.log("One celeb is " + celeb);

      res.render("stars/show", celeb);
    })
    .catch((error) =>
      console.log("An error happened while saving a new user:", error)
    );
});

// update star
router.get("/edit/:identifier", (req, res, next) => {
  Celeb.findById(req.params.identifier)
    .then((celeb) => {
      res.render("stars/edit", {myCel: celeb});
      console.log("found this: " + celeb)
    })
    .catch((error) => {
      return error;
    });
});


router.post("/:identifier", (req, res, next) => {
  Celeb.findByIdAndUpdate(req.params.identifier, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .then(() => {
      res.redirect("/stars");
    })
    .catch((error) => {
      return error;
    });
});


module.exports = router;
