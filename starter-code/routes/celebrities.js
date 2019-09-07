const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')


/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find().then(celebrityData =>
    res.render('celebrities/index', { celebrityData: celebrityData })
  )
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;