const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//Iteration #2 listing our celebrities

router.get("/celebrities", (req, res) => {

  Celebrity.find()
    .then(celebrity => {
      res.render("/celebrities/index", {
        celebrity
      });
    })
    .catch(err => {
      console.log(err);
    })
})


module.exports = router;