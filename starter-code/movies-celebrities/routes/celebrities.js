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

// Edit Step 1
router.get("/celebrities/:id/edit", (req, res, next) => {
  CelebrityModel.findById( req.params.id )
  .then((celebrityFromDb) => {
    res.locals.celebrityDetails = celebrityFromDb;
    res.render("celebrities/edit");
  })
  .catch((err) => {
    next(err);
  });
});

// Edit Step 2

router.post("/celebrities/:id",  (req, res, next ) => {
  CelebrityModel.findById(req.params.id)
  .then((celebrityFromDb) => {
    celebrityFromDb.set({
      name: req.body.celebrityName,
      occupation: req.body.celebrityOccupation,
      catchPhrase: req.body.celebrityCatchPhrase
    });
    res.locals.celebrityDetails = celebrityFromDb;

    return celebrityFromDb.save();
  })
  .then(() => {
    res.redirect(`/celebrities/${req.params.id}`);
  })
  .catch((err) => {
    if(err.errors) {
      res.locals.validationErrors = err.errors;
      res.render("celebrities/edit");
    }
    else {
    next(err);
  }
  });
});



router.post("/celebrities/:id/delete", (req, res, next) => {

    CelebrityModel.findByIdAndRemove(req.params.id)

    .then((celebrityFromDb) => {
        res.redirect("/celebrities");
    })

    .catch((err) => {
      next(err);
    });
});

module.exports = router;
