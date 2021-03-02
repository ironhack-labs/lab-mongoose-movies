const express = require("express");
const router = express.Router();

const CelebrityModel = require("./../models/Celebrity");

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  CelebrityModel.create({
    name, 
    occupation,
    catchPhrase
  })
  .then(res.redirect("/celebrities"))
  .catch(err => res.render("celebrities/new-celebrity"));
});

router.get("/celebrities", (req, res, next) => {
  CelebrityModel.find()
  .then(dbRes => res.render("celebrities/celebrities", { celebrities: dbRes }))
  .catch(next);
});


module.exports = router;