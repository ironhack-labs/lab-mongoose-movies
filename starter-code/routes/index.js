const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity-model.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

router.get("/celebrities", (req, res, next) => {
  // whenever a user visit '/books' find all the books sorted by rating
  Celebrity.find().then(celebritiesResults => {
    //   // send the database  query results to the HBS file ass 'bookArray'
    res.locals.celebArray = celebritiesResults;
    res.render("celebrities/celebList.hbs");
  });
});

// router.get("/celebrities/:id", (req, res, next) => {
//   //Id from inside the adress
//   const { celebId } = req.params;

//   // Find the book in the database using the ID
//   Celebrity.findById(celebId)
//     .then(celebDoc => {
//       res.locals.celebrityItem = celebDoc;
//       res.render("celebrities/celebDetails.hbs");
//     })
//     .catch(ree => next(err));
// });

module.exports = router;
