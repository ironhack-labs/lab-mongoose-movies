const express = require('express');
const router  = express.Router();
const Celebrities = require("../models/Celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


app.get("/celebrities", (req, res, next) => {
  Celebrities.find({})
  .then(celebrities => {
    res.render("celebrities/index", {celebrities})
  })
  .catch(error => {
    console.log('Error while getting the celebrities', error);
    next(error);
  })

})



module.exports = router;
