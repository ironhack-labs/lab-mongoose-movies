const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

// GET Celebrities List
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((celeb) => {
      res.render("celebrities/index", { list: celeb });
    })
    .catch((err) => {
      console.log("Error when get Celebrities list", err);
      next();
    });
});
//GET Celebrity info
router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
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
  const newCelebrity = new Celebrity({
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
