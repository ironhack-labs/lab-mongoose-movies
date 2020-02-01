const express = require('express');
const router  = express.Router();
const celebrities  = require('./../models/celebrity')

router.get("/", (req, res) => {
  celebrities
    .find()
    .then(dbRes => {
      res.render("all-celebrities", { celebrity: dbRes });
    })
    .catch(err => console.log(err));
});

router.get("/create-celebrity", (req, res) => {
  res.render("form-celebrity");
});

router.get("/:id", (req, res) => {
  celebrities
    .findById(req.params.id)
    .then(dbRes => {
      res.render("show", { celebrity: dbRes });
    })
    .catch(err => console.log(err));
});



router.post("/create-celebrity", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  celebrities
    .create({
      name,
      occupation,
      catchPhrase
    })
    .then(dbRes => res.redirect("/celebrities"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while creating new celebrity !");
    });
});



module.exports = router;
