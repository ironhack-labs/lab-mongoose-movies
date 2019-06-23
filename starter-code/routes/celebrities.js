const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET celebrity page */
router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(celebrity => {
      res.render("celebrities/index", { celebrity });
    })
    .catch(err => {
      res.render("celebrities/index");
    });
});

/* CREATE a new celebrity with a form */

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(dbRes => {
      console.log("create celebrity ok", dbRes);
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("create celebrity not ok", err);
      res.redirect("/celebrities/new");
    });
});

/*EDIT a celebrity */
router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:id", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({
    name,
    occupation,
    catchPhrase
  })
    .then(celebrity => {
      console.log("update celebrity ok", celebrity);
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("update celebrity not ok", err);
      next(err);
    });
});

/* GET a specific celebrity's details */
router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

/*DELETE a celebrity */
router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => {
      console.log("celebrity successfully deleted", celebrity);
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
