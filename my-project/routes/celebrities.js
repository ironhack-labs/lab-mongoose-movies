const express = require("express");

const CelebrityModel = require("../models/celebrity.js");

const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  CelebrityModel
    .find()
    .exec()
    .then((celebResults) => {
      // create a local variable for the view to access the DB results
      res.locals.listOfCelebrities = celebResults;

      // render only after the results have been retrieved
      // (the "then()" callback)
      res.render("celebrities/index");
    })
    .catch((err) => {
        next(err);
    });
}); // GET /celebrities


// STEP #1: show the new product form
router.get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/celeb-form");
}); //GET /celebrities/new

// STEP #2: process the new product submission
router.post("/celebrities", (req, res, next) => {
    const theCelebrity = new CelebrityModel({
        name:           req.body.celebrityName,
        occupation:     req.body.celebrityOccupation,
        catchPhrase:    req.body.celebrityCatchPhrase,
    });

    theCelebrity.save()
      .then(() => {
        res.redirect("/celebrities");
      })
      .catch((err) => {
        if (err.errors) {
              res.locals.validationErrors = err.errors;
              res.render("celebrities/celeb-form");
            }
        // if it isn't then render the error page with our error
        else {
            next(err);
          }
    });
});

// STEP #1: show edit form
router.get("/celebrities/:id/edit", (req, res, next) => {
  CelebrityModel.findById(req.params.id)
    .then((celebrityFromDB) => {
      res.locals.celebrityDetails = celebrityFromDB;

      res.render("celebrities/celeb-edit");
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
    CelebrityModel.findByIdAndRemove(req.params.id)
      .then((celebrityFromDB) => {
        // redirect to the list of products page
        // (you can't see the details of a product that isn't in the DB)
        res.redirect("/celebrities");
          // you CAN'T redirect to an EJS file
          // you can ONLY redirect to a URL
      })
      .catch((err) => {
          next(err);
      });
});

router.get("/celebrities/:id", (req, res, next) => {
    CelebrityModel.findById(req.params.id)
      .then((celebrityFromDB) => {
        res.locals.celebrityDetails = celebrityFromDB;

        return CelebrityModel.find({ celebrity: req.params.id }).exec();
      })
      .then((celebResults) => {
        res.locals.listOfCelebrities = celebResults;

        res.render("celebrities/show");
      })
      .catch((err) => {
        next(err);
      });
}); // GET /celebrities/:id

module.exports = router;
