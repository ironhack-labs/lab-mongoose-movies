const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

/* GET home page */

router.get("/", (req, res, next) => {
  Celebrity.find().then(result =>
    res.render("celebrities/index", { celebrities: result })
  );
});

router.get("/create", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/:id", (req, res, next) => {
  console.log("HELLO");
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      console.log({ celebrity });
      res.render("celebrities/show", { celebrity });
    })
    .catch(e => {
      console.log(e);
    });
});

router.post("/create", (req, res, next) => {
  const { name, occupation, catchPrase } = req.body;
  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPrase: catchPrase
  })
    .then(celebrity => {
      console.log("A new celebrity was added", celebrity);
      res.redirect("/celebrities");
    })
    .catch(err => console.log(err));
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => {
      console.log("The celebrity was deleted", celebrity);
      res.redirect("/celebrities");
    })
    .catch(err => console.log(err));
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render("celebrities/edit", { celebrity })
  })
    .catch(err => console.log(err));
});

router.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.updateOne(
    { _id: req.params.id },
    { $set: { name, occupation, catchPhrase } }
  )
    .then(() => res.redirect("/celebrities"))
    .catch(err => next(err));
});

module.exports = router;
