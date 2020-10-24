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

//   router.get('/:Id', (req, res, next) => {
//     celebs.findById(req.params.bookId)
//       .then(respuesta2 => {
//         res.render('celebrities/show', {respuesta2 } );
//       })
//       .catch(error => {
//         console.log('Error while retrieving celebrity details: ', error);
//       })
//   });

  router.get('/:Id', async (req, res, next) => {
    try{
      let respuesta2 = await celebs.findById(req.params.Id)
      console.log('el findy by id lo detectaaaa' ,{respuesta2} )
        res.render('celebrities/show', {respuesta2 });
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });


module.exports = router;

