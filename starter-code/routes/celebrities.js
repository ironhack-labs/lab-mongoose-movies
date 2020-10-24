const express = require('express');
const celebs = require('../models/celebrity');
const router  = express.Router();


/* GET home page */
router.get('/', async (req, res, next) => {
    try{
      let respuesta = await celebs.find()
      console.log(respuesta)
        res.render('celebrities/index', {respuesta });
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });
  
module.exports = router;

