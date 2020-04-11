const express = require('express');
const router  = express.Router();

// neccessary connection to database-model
const Celebrity = require('../models/celebrity')

// GET /celebrities
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then((celebrities) => {
        console.log('all our celebrities: ' + celebrities)
        res.render('celebrities/index', { allCelebrities: celebrities });
    })
    .catch((error) => {
        console.log(error);
      })
});

module.exports = router;