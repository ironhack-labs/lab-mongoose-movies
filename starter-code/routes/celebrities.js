const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity.js");

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

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
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

router.post("/celebrities", (req, res, next) => {
  // make an object with the information that the user gave
  const { name, occupation, catchPhrase } = req.body;
  //create saves the input information the user gave us and creates anew object in the DB)
  //ALWAYS redirect only if its successful to avoid DUPLICATE DATA on refresh
  // redirect only to ADDRESSES - not HBS files
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrityDoc => {
      ///the following line defines where you will go afterwords
      res.redirect(`/celebrities/${celebrityDoc._id}`);
    })
    .catch(err => next(err));
});

module.exports = router;