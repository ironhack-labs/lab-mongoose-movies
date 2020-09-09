const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebritiesFromDB) => {
      console.log(celebritiesFromDB);
      res.render("celebrities/index", { celebritiesList: celebritiesFromDB });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/celebrities/:id", (req, res) => {
  const id = req.params.id;
  Celebrity.findById(id).then((celebrityFromDB) => {
    console.log(celebrityFromDB);
    res.render("celebrities/show", { celebrity: celebrityFromDB });
  });
  // .catch((error) => {
  //   next(error);
  // });
});

router.post("/celebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
  })
    .then((celebrity) => {
      console.log(`New celebrity was created: ${celebrity}`);
      res.redirect(`/celebrities/${celebrity._id}`);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
