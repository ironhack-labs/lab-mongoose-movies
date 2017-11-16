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

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrity-views/celebrity-add");
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

router.post("/celebrities", (req, res, next) => {

  const theCelebrity = new CelebrityModel ({
      name: req.body.celebrityName,
      occupation: req.body. celebrityOccupation,
      catchPhrase: req.body.celebrityCatchPhrase,
      imageUrl: req.body.celebrityImageUrl,
  });

  theCelebrity.save()
    .then( () => {
        res.redirect("/celebrities");
    })
    .catch( (err) => {
      if (theCelebrity.errors) {
          res.locals.validationErrors
      }
    })
});





router.post("celebrities/:celebId", (req, res, next) => {
  CelebrityModel.findById(req.params.celebId)
  .then((celebrityFromDb) => {
    celebrityFromDb.set({
      name: req.body.celebrityName,
      occupation: req.body. celebrityOccupation,
      catchPhrase: req.body.celebrityCatchPhrase,
      imageUrl: req.body.celebrityImageUrl,
  });

  res.locals.celebrityDetails = celebrityFromDb;

  return celebrityFromDb.save();
  })
  .then( () => {
    res.redirect(`/celebrities/${req.params.celebId}`);
  })
  .catch( (err) => {
    if (err.errors) {
      res.locals.validationErrors = err.errors;
      res.render("celebrity-views/celebrity-add");
    }
    else {
      next(err);
    }
  });
});


module.exports = router;
