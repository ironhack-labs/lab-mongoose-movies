require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Celeb = require("../models/Famous");
const router = express.Router();

dbURL = process.env.DBURL;

/* GET celebrities list */
router.get("/index", (req, res, next) => {
  /* **Personal note:** Here there's no need to do moongoose.connect because app.js already does it constantly */

  Celeb.find()
    .then(celebs => {
      res.render("celebrities/index", { celebs });
    })
    .catch(err => {
      console.log(err);
    });
});

/* Add new celebrity */
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  const celeb = new Celeb({ name, occupation, catchPhrase });

  celeb
    .save()
    .then(celeb => {
      res.redirect("/celebrities/index");
    })
    .catch(err => {
      res.render("error", err);
    });
});

/* Show celebrity details */
router.get("/:id", (req, res, next) => {
  Celeb.findById(req.params.id).then(celeb => {
    res.render("celebrities/show", { celeb });
  });
});

/* Delete celebrity */
router.post("/:id/delete", (req, res, next) => {
  Celeb.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities/index");
    })
    .catch(err => {
      res.render("error", err);
    });
});

router.get("/:id/edit", (req, res, next) => {
  Celeb.findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/edit", { celeb });
    })
    .catch(err => {
      res.render("error", err);
    });
});

router.post("/:id/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const updates = { name, occupation, catchPhrase };

  console.log(req.body);
  Celeb.findByIdAndUpdate(req.params.id, updates)
    .then(() => {
      res.redirect("/celebrities/index");
    })
    .catch(err => {
      res.render("error", err);
    });
});

module.exports = router;
