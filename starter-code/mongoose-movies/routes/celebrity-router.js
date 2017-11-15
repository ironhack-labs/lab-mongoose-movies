const express = require("express");

const CelebrityModel = require("../models/celebrity-model");

const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  CelebrityModel
  .find()
  .exec()
  .then( (celebrityResults) => {
    res.locals.listOfCelebrities = celebrityResults;
    res.render("celebrity-views/celebrity-list");
  })
  .catch( (err) => {
    //render the error page with our Error
    next(err);
  });
});


router.get("/celebrities/:celebId", (req, res, next) => {
  CelebrityModel.findById(req.params.celebId)

  .then( (celebrityFromDb) => {
      res.locals.celebrityDetails = celebrityFromDb;
      res.render("celebrity-views/celebrity-details");

  })
  .catch( (err) => {
      next(err);
  });
});



module.exports = router;
