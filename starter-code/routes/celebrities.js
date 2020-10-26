const express = require("express");
const router = express.Router();

const celebrityModel = require("../models/celebrity");

router.get("/", (req, res, next) => {
  celebrityModel
    .find()
    .then((celebrity) => {
      // console.log('something', celebrity)
      res.render("celebrities/index", { celebrity: celebrity });
    })
    .catch((error) => {
      console.log("Error while getting the celebrities from the DB: ", error);
      next();
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  const newCelebrity = new celebrityModel({ name, occupation, catchPhrase });

  newCelebrity
    .save()
    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.render("/new");
    });
});

router.get("/:id/edit", (req, res, next) => {
  celebrityModel
    .findById(req.params.id)
    .then((celebrity) => {
      res.render("celebrities/edit", { celebrity: celebrity });
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

router.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  celebrityModel
    .update(
      { _id: req.params.id },
      { $set: { name, occupation, catchPhrase } },
      { new: true }
    )
    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("Error while editing one celebrity ", error);
    });
});

router.post("/:id/delete", (req, res, next) => {
  celebrityModel
    .findByIdAndRemove(req.params.id)
    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

router.get("/:id", (req, res, next) => {
  celebrityModel
    .findById(req.params.id)
    .then((celebrity) => {
      // console.log('something', celebrity)
      res.render("celebrities/show", { celebrity: celebrity });
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

module.exports = router;
