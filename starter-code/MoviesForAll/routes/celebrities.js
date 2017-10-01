//routes/celebrities.js

const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) =>{
    if (err) {return next(err)}

    res.render('celebrities/index',{
        celebrities: celebrities
    });
  });

});
//
// router.get('/:id', (req, res, next) => {
//   Celebrity.find({}, (err, celebrities) =>{
//     if(err) {return next(err)}
//
//     res.render('celebrities/index',{
//       celebrities: celebrities
//     });
//   });
// });

// router.get('/:id', (req, res, next) => {
//   Celebrity.findById({}, (err,req.params.id) =>{
//     if(err) {return next(err)}
//     res.render('celebrities/:id',{
//       celebrities:celebrities
//     });
//   });
// });

module.exports = router;
