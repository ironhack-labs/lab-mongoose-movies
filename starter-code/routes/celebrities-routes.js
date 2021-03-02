const express = require("express");
const router = express.Router();
const CelebrityModel = require("../models/celebrity");


router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new-celebrity');
});

router.get('/celebrities/celebrities', (req, res) => {
  res.render('celebrities/celebrities');
});


router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  CelebrityModel.create(req.body)
  .then(() => {
    console.log("------CELEBRITY CREATED !!!-------");
    res.redirect("/celebrities");
  })
  .catch((error) => {
    next(error);
  });
});


router.get("/celebrities", async (req, res, next) => {
  try {
    const celebrities = await CelebrityModel.find();
    console.log(celebrities);
    res.render("celebrities/celebrities", {celebrities});
  } catch(err) {
    next(err);
  }
});


module.exports = router;