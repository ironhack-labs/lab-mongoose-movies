const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.post("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities =>
      res.render("celebrities/index", {
        celebrities: celebrities
      })
    )
    .catch(err => console.log(`error getting the data from db ${err}`));
});

router.post("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrities => {
      res.render("celebrities/show", celebrities);
    })
    .catch(
      res.redirect("/celebrities", {
        error: `There was an error trying to access the star profile`
      })
    );
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(res.redirect("/celebrities"))
    .catch(
      res.redirect("/celebrities/new", {
        error: `There was an error trying to create ${req.body.name}`
      })
    );
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(res.redirect("/celebrities"))
    .catch(
      res.redirect("/celebrities", {
        error: `There was an error trying to delete the star`
      })
    );
});

router.post("/:id/edit", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.body.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(res.redirect("/celebrities"))
    .catch(next);
});

// router.get('/', (req, res, next) => {
//   Celebrity.find()
//     .then(celebrities => {
//       res.json(celebrities);
//     })
// });

module.exports = router;
