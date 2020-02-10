const express = require('express');
const router  = express.Router();
const celebrities = require("../models/Celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET Celebrities */
router.get('/celebrities/', (req, res, next) => {
  Celebrity.find()
  .then((allCelebrities) => {
    res.render('/celebrities', { Celebrities: allCelebrities })
  }).catch((err) => {
    console.log("Error")
  })
  // celebrities.find().then(celebritiesFound => res.render("/celebrities/index", {celebritiesFound}));
});

/* GET Celebrities id */
router.get("/celebrities/:id", (req, res, next) => {
  let { id } = req.params;
  celebrities.findById(id).then(celebrityFound =>
    res.render("onecelebrity", { celebrityFound })
  );
});

module.exports = router; 

