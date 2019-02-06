// call framework, model and router tool.

const express = require("express");
const Celebrity = require("../models/celebrity-model.js");
const router = express.Router();

/* CRUD */

/* Celebrities index */
router.get("/celebrities", (req, res, next) => {
  // whenever a user visits "/books" finds all the books sorted by rating
  Celebrity.find()
    .sort({ name: -1 })
    .then(queryResult => {
      // res.json(queryResult); // to see it as json in browser

      res.locals.celebrityArray = queryResult;
      res.render("celebrities/index.hbs");
    })
    // next(err) skips to the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

/* Celebrity detail */
router.get("/celebrities/:celebrityId", (req, res, next) => {
  const { celebrityId } = req.params;

  // find the book in the database using the ID from the address
  Celebrity.findById(celebrityId)
    .then(queryResult => {
      // send the database query result to the HBS file as "bookItem"
      res.locals.celebrityItem = queryResult;
      res.render("celebrities/show.hbs");
    })
    // next(err) skips to the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

module.exports = router;
