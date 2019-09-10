const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.js");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);
      res.render("celebrities/index.hbs", { celebrities });
    })
    .catch(err => {
      console.log("error displaying celebs: ", err);
    });
});

router.get("/add", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.post("/add", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrity => {
      console.log(`success, hero ${celebrity.name} added`);
      res.redirect(`/celebrities/${celebrity._id}`);
    })
    .catch(err => {
      console.log("error while adding: ", err);
    });
});

router.get("/:celebId", (req, res, next) => {
  const celebId = req.params.celebId;
  Celebrity.findById(celebId)
    .then(celebrity => {
      console.log(celebrity);
      res.render("celebrities/show.hbs", { celebrity: celebrity });
    })
    .catch(err => {
      "error while showing celeb: ", err;
    });
});

router.post("/:celebId/delete", (req, res, next) => {
  const celebId = req.params.celebId;
  Celebrity.findByIdAndRemove(celebId)
    .then(celebrity => {
      console.log(celebrity);
      res.redirect("/celebrities");
    })
    .catch(err => {
      "error while deleting celeb: ", err;
    });
});

module.exports = router;
