const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.redirect("/celebrities");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(dbRes => {
      res.render("index", {
        title: "Celebrities",
        celebrities: dbRes
      });
    })
    .catch(console.log("error"));
});

router.get("/celebrity/:id", (req, res) => {
  Celebrity.findOne({ _id: req.params.id }).then(dbRes => {
    console.log(dbRes);
    res.render("show", {
      title: "Celebrity details",
      celebrity: dbRes
    });
  });
});

router.get("/celebrities/new", (req, res) => {
  res.render("new", {
    title: "Create a new celebrity"
  });
});

router.post("/celebrities/new", (req, res) => {
  const newCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.create(newCelebrity)
    .then(dbRes => {
      console.log("Celebrity successfully created");
      res.redirect("/celebrities");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});

router.post("/celebrities/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(dbRes => {
      res.redirect("/celebrities");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});

router.get("/celebrities/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id)
    .then(dbRes => {
      res.render("edit", {
        title: "Edit an existing celebrity",
        details: dbRes
      });
    })
    .catch(dbErr => {
      console.log(dbErr);
    });
});

router.post("/celebrities/:id/edit", (req, res) => {
  Celebrity.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(dbRes => {
      res.redirect("/celebrities");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});

module.exports = router;
