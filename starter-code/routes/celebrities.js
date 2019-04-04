const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET celebrities page */
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrities: celebrities });
    })
    .catch(error => {
      res.render("next", error);
      console.log("Error while retrieving celebrities details: ", error);
    });
});

/* GET profile page */
router.get("/celebrities/new", (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then(newCelebrity => {
      res.render("celebrities/new", { newCelebrity: newCelebrity });
    })
    .catch(error => {
      res.render("next", error);
      console.log("Error while retrieving celebrity details: ", error);
    });
});

/* GET profile page */
router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then(celebrity => {
      res.render("celebrities/show", { celebrity: celebrity });
    })
    .catch(error => {
      res.render("next", error);
      console.log("Error while retrieving celebrity details: ", error);
    });
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  newCeleb
    .save()
    .then(celebrities => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      res.render("celebrities/", error);
      console.log("Error while creating celebrity: ", error);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove({ _id: req.params.id })
    .then(celebrities => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      res.render("next", error);
      console.log("Error while deleting celebrity: ", error);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity: celebrity });
    })
    .catch(error => {
      res.render("next", error);
      console.log("Error while deleting celebrity: ", error);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  Celebrity.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      res.render("celebrities/", error);
      console.log("Error while updating celebrity: ", error);
    });
});

module.exports = router;
