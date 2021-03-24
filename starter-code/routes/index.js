const express = require('express');
const { route } = require('../app');
const Celebrity = require('../models/celebrity')
const Movies = require('../models/movie')
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrity =>{
      res.render('index', { celebrity });
    })
    .catch(error =>{
      console.log(error)
    })
});


module.exports = router;
