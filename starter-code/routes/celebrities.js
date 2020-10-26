const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');


/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index.hbs');
  });

 
  //NO HACE FALTA VOLVER A PONER CELEBRITIES EN EL NOMBRE DE LA RUTA 

// router.get('/:_id',async (req, res, next)=>{
//     try {
//       const selectedCelebrity= await Celebrity.findById(req.params._id);
  
//       res.status(200).render('celebrities/show', {selectedCelebrity});
      
//     } catch (error) {
//       console.log('Error while listing our celebrities: ', error);
//     }
//   });

  module.exports = router;