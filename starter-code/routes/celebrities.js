const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js');


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()  
  .then(celebrities => {
    res.render('celebrities/index', {celebrities})
    console.log(celebrities)
  })
  .catch(error => {
    console.log(error)
  })
});

// router.get('/celebrities', (req, res, next) => {
//   Celebrity.findById()  
//   .then(celebrities => {
//     res.render('celebrities/index', {celebrities})
//     console.log(celebrities)
//   })
//   .catch(error => {
//     console.log(error)
//   })
// });

router.get('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById({"_id": celebrityId})  
  .then(celebrities => {
    res.render('celebrities/show', celebrities)    
  })
  .catch(e => {
    console.log(e)
  })
})

module.exports = router;


