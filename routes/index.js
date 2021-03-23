const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// Celebrities pages
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((allTheCelebrities) => {
      console.log("Retrieved celebrities from DB: ", allTheCelebrities);
      res.render("celebrities/index", { celebrities: allTheCelebrities });
    })
    .catch((error) => {
      console.log("Error while getting the celebrities from the DB: ", error);
      next(error);
    });
});

router.get("/celebrities/:id", (req, res) => {
  const { id } = req.params;

  Celebrity.findById(id)
    .then((theCelebrity) =>
      res.render("celebrities/show", { celebrity: theCelebrity })
    )
    .catch((error) => {
      console.log("Error while retrieving celebrity details: ", error);
      next(error);
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/create-celebrity", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
