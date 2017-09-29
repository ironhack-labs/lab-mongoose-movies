const express = require("express");

// require the Celebrity model here
const Celebrity = require("../models/celebrity");
const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }
    console.log(celebrities);
    res.render("celebrities/index", {
      celebrities: celebrities
    });
  });
});

router.get("/celebrities/:id/show", (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    console.log(celebrity);
    console.log(celebrityId);
    res.render("celebrities/show", { celebrity: celebrity });
  });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  // Create a new celebrity with the params
  const newCelebrity = new Celebrity(celebrityInfo);
  newCelebrity.save(err => {
    if (err) {
      return next(err);
    }
    // redirect to the list of celebrities if it saves
    return res.redirect("/celebrities");
  });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/celebrities");
  });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/edit", { celebrity: celebrity });
  });
});

router.post("/celebrities/:id", (req, res, next) => {
  const celebrityId = req.params.id;

  /*
   * Create a new object with all of the information from the request body.
   * This correlates directly with the schema of celebrity
   */
  const updates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(celebrityId, updates, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    res.redirect("/celebrities");
  });
});

module.exports = router;
