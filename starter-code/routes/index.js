const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity-model.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("celebrities/index.hbs");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrityResults => {
      res.locals.celebrityArray = celebrityResults;
      res.render("celebrities/index.hbs");
    })
    .catch(err => next(err));
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  //get the info printed:
  // res.send(req.params);
  const { celebrityId } = req.params;
  //find the book in the database using the ID from the address below
  Celebrity.findById(celebrityId)

    .then(celebrityDoc => {
      res.locals.celebrityItem = celebrityDoc;
      res.render("celebrities/show.hbs");
    })
    //next(err) skips to the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

module.exports = router;

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});
