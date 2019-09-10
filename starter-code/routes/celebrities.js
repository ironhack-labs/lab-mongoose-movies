const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrity => {
      res.render("celebrities/index", { celebrityList: celebrity });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  const id = req.params.id;
  // const { name, occupation, catchphrase} =
  Celebrity.findById(id)
    .then(celebrity => {
      res.render(`celebrities/${id}/edit`, { celebrity });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  const id = req.params.id;
  const { name, occupation, catchphrase } = req.body;
  Celebrity.findByIdAndUpdate(id, { name, occupation, catchphrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/celebrities/:celebId", (req, res, next) => {
  const celebId = req.params.celebId;
  console.log(req.params);
  Celebrity.findById(celebId)
    .then(celebrity => {
      // console.log(celebrity);
      res.render("celebrities/show", { celebrity });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  Celebrity.create({ name, occupation, catchphrase })
    .then(() => {
      console
        .log
        // `Success! ${name} was added to the database. Begone peasant.`
        ();
      res.redirect(`/celebrities/`);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      console.log(
        "Success. Your most hated celeb was deleted for all eternity. Muahahahahahah"
      );
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
