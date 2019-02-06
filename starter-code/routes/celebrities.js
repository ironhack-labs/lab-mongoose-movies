// call framework, model and router tool.

const express = require("express");
const Celebrity = require("../models/celebrity-model.js");
const router = express.Router();

/* CRUD */
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

module.exports = router;
