const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');


/* GET celebrities page */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(allCelebrities => {
    console.log(allCelebrities)
    res.render("celebrities/index", {celebrities: allCelebrities})
  })
  .catch(err => `There was an error : ${err}`)
});

module.exports = router;