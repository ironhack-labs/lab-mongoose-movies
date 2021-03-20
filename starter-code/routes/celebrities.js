const express = require('express');
const { route } = require('../app');
const Celebrity = require('../models/celebrity')
const router  = express.Router();

/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(celebrity =>{
        res.render('celebrities', { celebrity });
    })
    .catch(error =>{
        console.log(error)
    })
  
});

module.exports = router;