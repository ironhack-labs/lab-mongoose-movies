const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../models/celebrity");



router.get("/celebrities/new", function (req, res, next) {
        res.render("celebrities/new-celebrity.hbs");
  });

  router.post("/celebrities/create", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
    try {
      await CelebrityModel.create({
        name,
        occupation,
        catchPhrase,
      });
      res.redirect("/celebrities");
    } catch (error) {
        res.render("celebrities/new-celebrity.hbs");
    }
  });

  router.get("/celebrities",  function (req, res, next) {
    CelebrityModel.find()
    .then((dbRes) => {
      res.render("celebrities/celebrities.hbs", {
        list:dbRes
      });
    })
    .catch((dbError) => {
      next(dbError);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  CelebrityModel.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/celebrity-details.hbs', celebrity)
    })
    .catch(err => next(err));
});

  module.exports = router;