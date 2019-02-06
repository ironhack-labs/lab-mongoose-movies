const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrityResults => {
      res.locals.celebrityArray = celebrityResults;
      res.render("celebrities/index");
    })
    .catch(err => next(err));
});

module.exports = router;
