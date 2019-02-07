const express = require("express");

const Celebrity = require("../models/celebrity.js");

// create the router object (container of some routes)
const router = express.Router();

// ROUTES go here

router.get("/celebrities", (req, res, next) => {
  // whenever a user visits "/books" find all the books sorted by rating
  Celebrity.find()
    .then(celebrityResults => {
      // send the database query results to the HBS file as "celebrityArray"
      res.locals.celebrityArray = celebrityResults;
      res.render("celebrities/index.hbs");
    })
    // next(err) skips to the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

// #4 Adding new celebrities
// move this above the celebrityID router, otherwise it would call the celebrity ID page every time
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});
router.post("/process-add", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrityDoc => {
      res.redirect("celebrities/show.hbs");
    })
    .catch(err => {
      res.redirect("celebrities/new.hbs");
    });
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  // get the ID from the address (it's inside of req.params)
  const { celebrityId } = req.params;

  // find the book in the database using the ID from the address
  Celebrity.findById(celebrityId)
    .then(celebrityDoc => {
      res.locals.celebrityItem = celebrityDoc;
      res.render("celebrities/show.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
