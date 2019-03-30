const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

// router.get('/celebrities', (req, res) => {
//   Celebrity.find().then((celebrities)=> res.render('celebrities/index', {celebrities:celebrities}))
// });

router.get('/', (req, res) => {
  Celebrity.find().then((celebrities)=> res.render('celebrities/index', {celebrities:celebrities}))
});
  
router.get('/:celebrityId', (req, res) => {
  Celebrity.findOne({_id:req.params.celebrityId})
  .then((movie)=>movie.populate('cast'))
  .then((celebrity)=> res.render('celebrities/show', celebrity))
  .catch(error=>console.log(error))
 
});


module.exports = router;  