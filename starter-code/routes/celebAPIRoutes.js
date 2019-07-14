const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(listOfCelebrities => {
      res.json(listOfCelebrities);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchphrase = req.body.catchphrase;

  Celebrity.create({
    name: name,
    occupation: occupation,
    catchphrase: catchphrase
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
