const express = require("express");
const router = express.Router();

const schoolModel = require("../models/school");

router.get("/", (req, res, next) => {
  schoolModel
    .find()
    .then((school) => {
      // console.log('something', school)
      res.render("schools/index", { school: school });
    })
    .catch((error) => {
      console.log("Error while getting the schools from the DB: ", error);
      next();
    });
});

router.get("/new", (req, res, next) => {
  res.render("schools/new");
});

router.post("/new", (req, res, next) => {
  const { house, colour, animal } = req.body;

  const newSchool = new schoolModel({ house, colour, animal });

  newSchool
    .save()
    .then((school) => {
      res.redirect("/schools");
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.render("schools/new");
    });
});

router.post("/:id/delete", (req, res, next) => {
  schoolModel
    .findByIdAndRemove(req.params.id)
    .then((school) => {
      res.redirect("/schools");
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

router.get("/:id/edit", (req, res, next) => {
  schoolModel
    .findById(req.params.id)
    .then((school) => {
      res.render("schools/edit", { school: school });
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

router.post("/:id", (req, res, next) => {
  const { house, colour, animal } = req.body;

  schoolModel
    .update(
      { _id: req.params.id },
      { $set: { house, colour, animal } },
      { new: true }
    )
    .then((school) => {
      res.redirect("/schools");
    })
    .catch((error) => {
      console.log("Error while editing one school ", error);
    });
});

router.get("/:id", (req, res, next) => {
  schoolModel
    .findById(req.params.id)
    .then((school) => {
      // console.log('something', school)
      res.render("schools/show", { school: school });
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

module.exports = router;
