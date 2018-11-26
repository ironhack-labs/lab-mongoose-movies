const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => { //this CONTROLLER is asking for data from the Book MODEL    
  Celebrity.find()
  .then(celebrities => {
              //(where , object with the data)
    res.render('index', { celebrities }); //sending a VIEW to the client
  })
  .catch(err => {
    res.render('index')
  })
});

module.exports = router;



