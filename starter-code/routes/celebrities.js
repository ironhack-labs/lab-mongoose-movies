const mongoose = require('mongoose');
const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');



/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celeb) => {
      if(!celeb) {
        return 
      }
      res.render('/celebrities/index', celeb)
    })
    .catch(next);   
    
})