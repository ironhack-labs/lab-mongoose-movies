const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");

// GET Celebrities List
router.get("/", (req, res, next) => {
  Celebrities.find()
    .then((celeb) => {
      res.render("celebrities/index", { list: celeb });
    })
    .catch((err) => {
      console.log("Error when get Celebrities list", err);
      next();
    });
});

//DELETE Celebrity
router.post("/:id/delete", (req, res, next) => {
  Celebrities.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log("An error has ocurred while delete celebrity", err);
      next();
    });
});

//EDIT Celebrity
router.get("/:id/edit", (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then((celeb) => res.render("celebrities/edit", celeb))
    .catch((err) => {
      console.log("An error has occurred while charge the edit route", err);
      next();
    });
});
router.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrities.update(
    { _id: req.params.id },
    { $set: { name, occupation, catchPhrase } }
  )
    .then(() => res.redirect("/celebrities"))
    .catch((err) => {
      console.log("Error has occurred while save the new data", err);
      next();
    });
});

//GET Celebrity info
router.get("/:id", (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then((celeb) => {
      res.render("celebrities/show", celeb);
    })
    .catch((err) => {
      console.log("An error has occurred while charge the celebrity", err);
      next();
    });
});

// ADD Celebrity ( GET & POST)
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});
router.post("/new", (req, res, next) => {
  //Get data from req.body
  const { name, occupation, catchPhrase } = req.body;
  //New instance of Celebrity with data catched
  const newCelebrity = new Celebrities({
    name,
    occupation,
    catchPhrase,
  });
  //Add to DB and redirect to Celebrities List
  newCelebrity
    .save()
    .then(res.redirect("/celebrities"))
    .catch((err) => {
      console.log("An error has occurred while add a new celebrity");
      next();
    });
});

module.exports = router;
