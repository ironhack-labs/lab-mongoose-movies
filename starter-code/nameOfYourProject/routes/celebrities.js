const express = require("express");
const Celebrity = require("../models/celebrity");

// require the Celebrity model here

const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }
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
    res.render("celebrities/show", { celebrity: celebrity });
  });
});

// Create new Celebrity

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  // Create a new Product with the params
  const newCelebrity = new Celebrity(celebrityInfo);
  // Save the product to the DB
  newCelebrity.save(err => {
    if (err) {
      return next(err);
    }
    // redirect to the list of products if it saves
    return res.redirect("/celebrities");
  });
});

//Delete Celebrity

router.post("/celebrities/:id/delete", (req, res, next) => {
  const id = req.params.id;

  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/celebrities");
  });
});

//Edit Celebrity

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
  const CelebrityId = req.params.id;

  const updates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(celebrityId, updates, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/celebrities");
  });
});

module.exports = router;
