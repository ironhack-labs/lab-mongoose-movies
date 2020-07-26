const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity");
const { route } = require(".");

/* GET celebrities page */
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((celebDB) => {
      // console.log("hola hola", celeb);
      res.render("celebrities/index", { celeb: celebDB });
    })
    .catch((err) => {
      console.log("Error while searching index of celebrities", err);
      next();
    });
});

/* GET celebrities id */

router.get("/:id", (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById({ _id: celebId })
    .then((celeb) => {
      res.render("celebrities/show", { celebIndiv: celeb });
    })
    .catch((err) => {
      console.log("Error while searching a individual celebrity", err);
      next();
    });
});

/* GET new celeb page */
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

/* POST new celeb page */

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });

  newCeleb
    .save()
    .then((celeb) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      res.render("celebrities/new");
      console.log(`There was an error while creating a new celeb`, err);
    });
});

/* POST delete celeb */

router.post("/:id/delete", (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findByIdAndRemove({ _id: celebId })
    .then((celeb) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      next();
      console.log("An error occurs while deleting a celeb", err);
    });
});

/* GET edit celeb*/

router.get("/:id/edit", (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findOne({ _id: celebId })
    .then((celeb) => {
      res.render("celebrities/edit", celeb);
    })
    .catch((err) => {
      next();
      console.log("Error while getting the page for editing a celeb", err);
    });
});

/* POST edit celeb */

router.post("/:id", (req, res, next) => {
  const celebId = req.params.id;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: celebId },
    { $set: { name, occupation, catchPhrase } },
    { new: true }
  )
    .then((celebUpd) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log("Error occurs while editing a celeb", err);
      next();
    });
});

module.exports = router;
