
const express = require('express');
//Definir qué la ruta de donde vamos a tener esto
const Celebrity = require('../models/celebrity.js');
//Define router so we can redirect
const router = express.Router();

//To redirect we need to use get with router
router.get('/celebrities',(req, res, next) =>{
  //Lets call the celebrity find model inside the find the object
  Celebrity.find({},(err, celebrities) => {
      if (err){
        next();
        return;
      }else{
        obj = {
          celebrities: celebrities,
        };
        res.render('celebrities/index', obj);
      }
  });
});

module.exports = router;
