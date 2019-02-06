const express = require("express");

const Celebrity = require("../models/celebrity.js");

const router = express.Router();

// ROUTES GO HERE
// router.get()

router.get("/celebrities", (req, res, next) => {
  // whenever a user visits "/books" find all the books sorted by rating
  Celebrity.find()
    .then(celebResults => {
      // send the database query results to the HBS file as "bookArray"
      res.locals.celebArray = celebResults;
      res.render("celebrities/index.hbs");
    })
    // next(err) skips the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.post("/process-celeb", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebDoc => {
      // redirect if it's successful
      // (redirect ONLY to ADDRESSES - not to HBS files)
      res.redirect("/celebrities");
    })
    // next(err) skips the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  // get the ID from the address (it's inside of req.params)
  const { celebrityId } = req.params;

  // find the book in the database using the ID from the address
  Celebrity.findById(celebrityId)
    .then(celebDoc => {
      res.locals.celebItem = celebDoc;
      res.render("celebrities/show.hbs");
    })
    // next(err) skips the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

module.exports = router;
