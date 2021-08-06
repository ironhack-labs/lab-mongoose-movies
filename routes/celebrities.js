const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities/index", { celebrities: celebrities });
    })
    .catch((err) => {
      console.log("Error occured while finding the celebrities", err);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) =>
      res.render("celebrities/show", { celebrity: celebrity })
    )
    .catch((err) => {
      console.log("Error occured while finding the celebrity", err);
      res.redirect("/celebrities");
    });
});

router.get("celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      Celebrity.save().then(res.render("/celebrities"));
    })
    .catch((err) => {
      console.log("Error occured while creating the celebrity", err);
      res.redirect("/celebrities/new");
    });
});

router.post("/celebrities/delete/:id", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndDelete(id)
    .then(res.redirect("/celebrities"))
    .catch((err) => {
      console.log("Error occured while deleting the celebrity", err);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => res.render("celebrity/edit", { celebrity: celebrity }))
    .catch((err) => {
      console.log("Error occured while finding the celebrity", err);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
    .then(
      Celebrity.save().then((id) => {
        res.redirect("/celebrities/:id", { id: id });
      })
    )
    .catch((err) => {
      console.log("Error occured while updating the celebrity", err);
    });
});

module.exports = router;
