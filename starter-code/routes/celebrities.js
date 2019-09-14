const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/**
 * /celebrities
 * GET
 * Show all celebrities
 */

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .select({ name: 1, imageUrl: 1 })
    .sort({ name: 1 })
    .then(celebrities => {
      res.render("celebrities/index", { celebrities, host: process.env.HOST });
    });
});

/**
 * /celebrities/new
 * GET
 * Show a form to create a celebrity
 */

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

/**
 * /celebrities:id
 * GET
 * Show a specific celebrity
 */

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celeb => {
    res.render("celebrities/celebrity", { celeb, host: process.env.HOST });
  });
});

/**
 * /celebrities/:id/delete
 * POST
 * Delete a specific celebrity
 */

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(deletedCelebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      next(error);
    });
});

/**
 * /celebrities
 * POST
 * Send the data from the form to this route to create the celebrity and save to the database
 */

router.post("/celebrities", (req, res, next) => {
  const newCelebrity = {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.create(newCelebrity)
    .then(createdCelebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
      res.render("celebrities/new");
    });
});

/**
 * /celebrities/:id/edit
 * GET
 * Show a form to edit a celebrity
 */

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id)
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity });
    })
    .catch(error => next(error));
});

/**
 * /celebrities/:id
 * POST
 * Send the data from the form to this route to update and save the celebrity from the database
 */

router.post("/celebrities/:id", (req, res) => {
  const celebrityToUpdate = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(req.params.id, celebrityToUpdate, { new: true })
    .then(celeb => {
      res.redirect("/celebrities");
    })
    .catch(error => next(error));
});

module.exports = router;
