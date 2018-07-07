const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* C(R)UD: Retrieve -> Show all celebrities */
router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

/* (C)RUD: Add a celebrity form */
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

/* (C)RUD: Create the celebrity in DB with the data introduced in the form*/
router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  new Celebrity({ name, occupation, catchPhrase })
    .save()
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

/* CRU(D): Delete a specific celebrity */
router.get("/celebrities/delete/:id", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

/* CR(U)D: Show a form to edit a celebrity */
router.get("/celebrities/edit/:id", (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity });
    })
    .catch(error => {
      console.log(error);
    });
});

/* CR(U)D: Update an specific celebrity */
router.post("/celebrities/edit/:id", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

/* C(R)UD: Retrieve -> Show an specific celebrity */
router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrities => {
      res.render("celebrities/show", { celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
