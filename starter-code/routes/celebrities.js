const express = require('express');
const router  = express.Router();
const celebrityModel = require("../models/Celebrity");

router.get("/celebrities", (req, res) => {
    celebrityModel
    .find()
    .then(dbResults => {
        res.render("celebrities-index", {
            celebrities: dbResults
        });
    })
    .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
    });
});

router.get("/celebrities/show/:id", (req, res) => {
    celebrityModel
      .findById(req.params.id)
      .then(celebrity => {
        res.render("celebrity-show", { celebrity });
      })
      .catch(dbErr => console.error("OH no, db err :", dbErr));
  });

  router.get("/celebrities/new", (req, res) => {
    res.render("celebrity-new");
  });

  
  router.post("/celebrities/new", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    celebrityModel
      .create({
        name,
        occupation,
        catchPhrase
      })
      .then(dbRes => res.redirect("/celebrities"))
      .catch(dbErr => {
        console.log(dbErr);
        res.render("celebrity-new");
      });
  });

  router.get("/celebrities/delete/:id", (req, res) => {
    celebrityModel
      .findByIdAndDelete(req.params.id)
      .then(dbRes => {
        res.redirect("/celebrities");
      })
      .catch(dbErr => {
        console.error(dbErr);
      });
  });

  router.get("/celebrities/edit/:id", (req, res) => {
    celebrityModel
      .findById(req.params.id)
      .then(dbRes => {
        res.render("form-celebrities-edit", { celebrity: dbRes });
      })
      .catch(dbErr => console.error(dbErr));
  });
  
  router.post("/celebrities/edit/:id", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    celebrityModel.findByIdAndUpdate(req.params.id, {
      name,
      occupation,
      catchPhrase
    })
    .then(dbRes => {
      res.redirect("/celebrities");
    })
    .catch(dbErr => {
      console.error(dbErr)
    });
  });

module.exports = router;