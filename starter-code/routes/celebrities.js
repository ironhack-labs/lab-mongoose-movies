const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrities.find()
    .then(celebritiesFound =>
      res.render("celebrities/index", { celebritiesFound })
    )
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  let { id } = req.params;
  Celebrities.findById(id)
    .then(celebrityFound => res.render("celebrities/show", celebrityFound))
    // .then(celebrityFound => res.json(celebrityFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  let { id } = req.params;
  let celebrity = {
    name: req.body.name,
    picture: req.body.picture,
    picture2: req.body.picture2,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrities.findByIdAndUpdate(id, celebrity)
    .then(() => Celebrities.find())
    .then(celebritiesFound =>
      res.render("celebrities/index", { celebritiesFound })
    )
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.post("/celebrities", (req, res, next) => {
  Celebrities.create({
    name: req.body.name,
    picture:
      req.body.picture ||
      "https://i.promecal.es/IMG/2015/97ED79D2-EFB8-3E70-EDCFAF6A982BA507.JPG",
    occupation: req.body.occupation
  }).then(() => {
    Celebrities.find()
      .then(celebritiesFound =>
        res.render("celebrities/index", { celebritiesFound })
      )
      .catch(err => {
        console.error("Error connecting to mongo");
        next(err);
      });
  });
  // }
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  let { id } = req.params;
  Celebrities.findByIdAndRemove(id).then(() => {
    res.redirect("/celebrities").catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
  });
  // }
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  let { id } = req.params;
  Celebrities.findById(id)
    .then(celebrityFound => res.render("celebrities/edit", celebrityFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

module.exports = router;
