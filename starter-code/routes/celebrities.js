const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");
// const Author = require('../models/author')

// READ
// GET /books
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      console.log("all my celebrities: " + celebrities);
      res.render("celebrities/index", {
        allCelebrities: celebrities,
      });
    })
    .catch((error) => {
      console.log("Error while getting the celebrities from the DB: ", error);
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res) => {
  console.log("req.body", req.body);

  let celebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  });

  celebrity
    .save()
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("Error while adding new celebrity: ", error);
      res.render("celebrities/new");
    });
});
router.post("/:id/delete", (req, res) => {
  console.log(req.params.id);
  Celebrity.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/celebrities");
  });
});

router.get("/:id/edit", (req, res) => {
  console.log(req.params.id);
  Celebrity.findById(req.params.id)
    .then((celebrity) => {
      console.log("celebrity details" + celebrity.occupation);
      res.render("celebrities/edit", celebrity);
    })
    .catch((error) => {
      console.log("Error while editing celebrity", error);
    });
});

//  updating an celebrity
router.post("/:id/edit", (req, res) => {
  console.log("req.body", req.body);
  console.log(req.params.id);
  Celebrity.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
    })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("Error while editing celebrity", error);
    });
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => {
      console.log("all my celebrities: " + celebrity);
      res.render("celebrities/show", {
        celebrityDetails: celebrity,
      });
    })
    .catch((error) => {
      console.log("Error while getting the celebrities from the DB: ", error);
    });
});

module.exports = router;