const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

//find celebrity
router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(dbRes => {
      console.log(dbRes);
      res.render("celebrities/index", { celebrity: dbRes });
    })
    .catch(err => {
      console.log(err);
    });
});
// show new celebrity view
router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

//Delete celebrity
router.post("/celebrities/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove({ _id: req.params.id }).then(dbRes => {
    res.redirect("/celebrities");
  });
});

// find celebreity by id
router.get("/celebrities/:id", (req, res) => {
  Celebrity.findOne({ _id: req.params.id }).then(dbRes => {
    res.render("celebrities/show", { celebrity: dbRes }).catch(err => {
      console.log(err);
    });
  });
});
// create a new celebrity
router.post("/celebrities/create", (req, res) => {
  var newCelebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  });
  newCelebrity
    .save()
    .then(dbRes => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      res.redirect("/celebrities/new");
    });

  // 2eme méthode avec .create()
  // Celebrity.create(newCelebrity)
  //   .then(dbRes => {
  //     res.redirect("/celebrities");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
});

module.exports = router;
