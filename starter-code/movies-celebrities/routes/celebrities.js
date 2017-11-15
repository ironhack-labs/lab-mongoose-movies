const express = require("express");

const CelebrityModel = require("../models/celebrity");


const router = express.Router();

// Celebrities List
router.get("/celebrities", (req, res, next) => {
    CelebrityModel
    .find()
    .exec()
    .then((celebrityResults) => {

      res.locals.listOfCelebrities = celebrityResults;

      res.render("celebrities/index");

    })
    .catch((err) => {
      next(err);
    });
});


// Add New Celebrity
//Step 1
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});
// Step 2
router.post("/celebrities", (req, res, next) => {
  const theCelebrity = new CelebrityModel({
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhrase: req.body.celebrityCatchPhrase
  });
  theCelebrity.save()
  .then(() => {
   // Step 3

    res.redirect("/celebrities");

  })
  .catch((err) => {
    next(err);
  });
});





router.get("/celebrities/:id", (req, res, next) => {
  CelebrityModel.findById(req.params.id)
  .then((celebrityFromDb) => {

    res.locals.celebrityDetails = celebrityFromDb;
    res.render("celebrities/show");

  })
  .catch((err) => {
    next(err);
  });
});

router.post("/celebrities/:id/delete")
// Continue Here!!!!

module.exports = router;
