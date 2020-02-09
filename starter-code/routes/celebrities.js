const express = require("express");
const router = express.Router();
const Celebrities = require("../models/Celebrity");

// router.get("/", (req, res, next) => {
//   res.render("index");
// });

router.get("/celebrities", (req, res, next) => {
  Celebrities.find()
    .then(allCeleb => {
      res.render("celebrities/index", { allCeleb });
    })
    .catch(() => {
      next();
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrities.find({ _id: req.params.id })
    .then(celebFound => {
      res.render("celebrities/show", { celebFound });
    })
    .catch(() => {
      next();
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  Celebrities.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(() => {
    res.redirect("/celebrities");
  });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrities.findByIdAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(() => {
      next();
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrities.find({ _id: req.params.id })
    .then(celebToEdit => {
      res.render("celebrities/edit", { celebToEdit });
    })
    .catch(() => {
      next();
    });
});

router.post("/celebrities/:id/", (req, res, next) => {
  Celebrities.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(() => {
      next();
    });
});

module.exports = router;
