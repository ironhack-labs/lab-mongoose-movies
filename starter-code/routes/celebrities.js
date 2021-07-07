const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(console.error);
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase, rating } = req.body;
  const celeb = new Celebrity({ name, occupation, catchPhrase, rating });

  celeb
    .save()
    .then(() => {
      res.redirect("/celebrities/");
    })
    .catch(console.error);
});

router.get("/create", (req, res, next) => {
  res.render("celebrities/create");
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celebrity => {
      res.render("celebrities/show", celebrity);
    })
    .catch(console.error);
});

router.post("/:id", (req, res) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase, rating } = req.body;

  Celebrity.findByIdAndUpdate(id, {
    name,
    occupation,
    catchPhrase,
    rating
  }).then(() => {
    Celebrity.find({}).then(celebrities => {
      res.render("celebrities/index", { celebrities });
    });
  });
});

router.get("/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(result => {
      res.redirect("/celebrities/");
    })
    .catch(console.error);
});

router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  Celebrity.findById(id).then(celebrity => {
    res.render("celebrities/edit", celebrity);
  });
});

module.exports = router;
