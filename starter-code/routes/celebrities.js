const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');



// GET ALL CELEBRITIES LIST
router.get('/all-celebrities', (req, res, next) => {
    Celebrity.find({}, {name: 1})
    .then((celebrity) => {
      console.log(celebrity)
      res.render('./celebrities/index', {celebrity});
      
    })
    .catch((err) => {
      console.log(err)
      res.render('error')
    })
    
  })







// router.get('/details/:id', (req, res, next)=>{
//   const movieID = req.params.id;
//   Movie.findById(movieID)
//   .then((result)=>{
//       res.render('singleMovie', result);
//   })
//   .catch((error)=>{
//       res.send(error);
//   });
// });



  
module.exports = router;
