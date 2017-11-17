const express = require("express");

const CelebrityModel = require("../models/celebrity-model");

const router = express.Router();

// CELEBRITY LIST PAGE-----------------------------------------
router.get("/celebrities", (req, res, next) => {
  CelebrityModel
  .find()
  .exec()
  .then( (celebrityResults) => {
    res.locals.listOfCelebrities = celebrityResults;
    res.render("celebrity-views/celebrity-list");
  })
  .catch( (err) => {
    next(err);
  });
});
//-------------------------------------------------------------
// ADD A NEW CELEBRITY FORM PAGE ------------------------------
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrity-views/celebrity-add");
});
//-------------------------------------------------------------
// PROCESS NEW CELEBRITY AND ADD TO CELEBRITY LIST PAGE -------
router.post("/celebrities", (req, res, next) => {

  const theCelebrity = new CelebrityModel ({
      name: req.body.celebrityName,
      occupation: req.body. celebrityOccupation,
      catchPhrase: req.body.celebrityCatchPhrase,
      imageUrl: req.body.celebrityImageUrl
  });

  theCelebrity.save()
    .then( () => {
        res.redirect("/celebrities");
    })
    .catch( (err) => {
      if (theCelebrity.errors) {
          res.locals.validationErrors= err.errors;
          res.render("celebrity-views/celebrity-add");
        }
        else {
          next(err);
        }
    });
});
//-------------------------------------------------------------
// CELEBRITY DETAILS PAGE -------------------------------------
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
//-------------------------------------------------------------
// DELETE CELEBRITY FORM --------------------------------------
router.get("/celebrities/:celebId/delete", (req, res, next) => {
  CelebrityModel.findByIdAndRemove(req.params.celebId)
  .then( (celebrityFromDb) => {
      res.redirect("/celebrities");
  })
  .catch((err) => {
      next (err);
  });
});
//-------------------------------------------------------------


module.exports = router;
