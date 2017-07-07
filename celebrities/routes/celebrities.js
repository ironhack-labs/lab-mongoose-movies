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
//this way we will be able to redirect them to the details site for each celebrity
router.get('/celebrities/:id', (req, res, next) =>{
  Celebrity.findById(req.params.id,(err, id) =>{
    if(err){
      next();
      return;
    }else{
      res.render('celebrities/show', {
        title: 'Aloo',
        celebrity: id,
      });
    }
  });
});
module.exports = router;

router.get('/celebrities/new', (req, res, next) =>{
  res.render('celebrities/new');
});
