const express = require("express");
const router = new express.Router();
const Celebrity = require("../models/celebrity");

// Get all celebrities
router.get("/celebrities", (req, res) => {
  Celebrity.find({})
    .then((dbResult) => {
      res.render("celebrities/index", {
        celebrities: dbResult,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Create Create a new celebrity
router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new.hbs", {
    error: req.flash("error"),
  });
});

router.post("/celebrities", (req, res) => {
  if (
    req.body.name === "" ||
    req.body.occupation === "" ||
    req.body.catchPhrase === ""
  ) {
    req.flash("error", "You must fill all the fields!");
    res.redirect("/celebrities/new");
  } else {
    Celebrity.create(req.body)
      .then((dbResult) => {
        res.redirect("/celebrities");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

// View a celebrity
router.get("/celebrities/:id", (req, res) => {
  Celebrity.findById(req.params.id)
    .then((dbResult) => {
      res.render("celebrities/show", {
        celebrities: dbResult,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete celebrity
router.post("/celebrities/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then((dbResult) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Update celebrity
router.get("/celebrities/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id)
    .then((dbResult) => {
      res.render("celebrities/edit.hbs", {
        celebrities: dbResult,
        error: req.flash("error"),
      });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

router.post("/celebrities/:id", (req, res) => {
  if (
    req.body.name === "" ||
    req.body.occupation === "" ||
    req.body.catchPhrase === ""
  ) {
    req.flash("error", "You need to fill all the fields..");
    res.redirect(`/celebrities/${req.params.id}/edit`);
  } else {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((dbResult) => {
        res.redirect("/celebrities");
      })
      .catch((dbErr) => {
        console.log(dbErr);
      });
  }
});

module.exports = router;
