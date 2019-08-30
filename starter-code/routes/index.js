const express = require('express');
const router  = express.Router();
let Celebrity = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(dbRes => {
      res.render('celebrities', { celebrities:dbRes });
      console.log("All celebrities found!")
    })
    .catch(dbErr => {
      console.log(dbErr)
    })
});

module.exports = router;
