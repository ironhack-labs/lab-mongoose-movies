const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity-model.js");
// const celebData = require("../bin/seeds");

router.get("/celebrities/:celebId", (req, res, next) => {
  //Id from inside the adress
  const { celebId } = req.params;

  // Find the book in the database using the ID
  Celebrity.findById(celebId)
    .then(celebDoc => {
      res.locals.celebritiesItem = celebDoc;
      res.render("celebrities/celebDetails.hbs");
    })
    .catch(ree => next(err));
});

router.get("/celebrities", (req, res, next) => {
  // whenever a user visit '/books' find all the books sorted by rating
  Celebrity.find()

    .then(celebritiesResults => {
      // send the database  query results to the HBS file ass 'bookArray'
      res.locals.celebArray = celebritiesResults;
      res.render("celerities/celebList.hbs");
    })
    // next(err) skips to the other error handler in 'bin/www' (error.hbs)
    .catch(err => next(err));
});

module.exports = router;
