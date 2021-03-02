const express = require("express");
const { findByIdAndRemove } = require("../models/Celebrity");
const router = express.Router();
const CelebrityModel = require("../models/Celebrity");



router.get('/', (req, res, next) => {
  CelebrityModel.find()
  .then((celebrities) => res.render('../views/celebrities/index', {celebrities}))
  .catch((err) => next(err))
});



router.get('/:id([a-z0-9]{24})', (req, res, next) => {
  CelebrityModel.findById(req.params.id)
  .then((celebrity) => res.render("../views/celebrities/show.hbs", {celebrity}))
  .catch((err) => next(err));
});

router.get('/new', (req, res, next) => {
  res.render("../views/celebrities/new.hbs")
});

router.post('/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  CelebrityModel.create({name, occupation, catchPhrase})
  .then((celebrity) => {
    console.log(celebrity);
    res.redirect("/celebrities")
  })
  .catch(() => res.redirect("/celebrities/new"));
});

router.post('/:id/delete', (req, res, next) => {
  console.log(req.params.id)
  CelebrityModel.findByIdAndRemove(req.params.id)
  .then(() => res.redirect("/celebrities"))
  .catch((err) => next(err))
});

module.exports = router;