const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

// route to display all celebrities:
router.get("/celebrities/index", (req, res, next) => {
  Celebrity.find({})
    .then(celebDocs => {
      res.render("celebrities/index.hbs", { celebList: celebDocs });
    })
    .catch(err => {
      next(err);
    });
});

// route to add a new celebrity
router.get("/celebrities/newCeleb", (req, res, next) => {
  // display a form
  res.render("./celebrities/new.hbs");
});

// route to display the celebrities details page:
router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebDocs => {
      //   res.send(celebDocs);
      res.render("celebrities/show.hbs", celebDocs);
    })
    .catch(err => {
      next(err);
    });
});

// route to display a form to edit a celebrity
router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebDocs => {
      res.render("celebrities/edit.hbs", celebDocs);
    })
    .catch(err => {
      next(err);
    });
});

// delete a celebrity
router.get("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/celebrities/index");
    })
    .catch(err => {
      next(err);
    });
});

// edit a celebrity
// still an issue: when saving the changes, it creates a new entry
router.post("/celebrities/:id/", (req, res, next) => {
  Celebrity.updateOne(
    { _id: req.params.id },
    {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    }
  )
    .then(() => {
      res.redirect("/celebrities/index");
    })
    .catch(err => {
      // this one's not working yet; it should stay
      // on the same page when trying to submit without input in the fields
      res.redirect("celebrities/:id/edit");
    });
});

// route to submit the form when adding a new celebrity
router.post("/celebrities", (req, res, next) => {
  // create a new celebrity
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(createdCelebrity => {
      // after creating the celebrity, redirect to the created book's page:
      res.redirect("celebrities/index");
    })
    .catch(err => {
      res.redirect("celebrities/newCeleb");
    });
});

module.exports = router;
