const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

/* GET home page */
router.get("/", (req, res, next) => {
  Celebrity.find().then(celebResult => {
    res.locals.celebArray = celebResult;
    res.render("celebrities/index.hbs");
  });
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebResult => {
      res.locals.celebArray = celebResult;
      res.render("celebrity-list.hbs");
    })
    .catch(err => next(err));
});

router.get("/celebrities/:celebId", (req, res, next) => {
  const { celebId } = req.params;

  Celebrity.findById(celebId)
    .then(celebResult => {
      res.locals.celebItem = celebResult;
      console.log(celebResult);
      res.render("celebrities/show.hbs");
    })
    .catch(err => next(err));
});
module.exports = router;
