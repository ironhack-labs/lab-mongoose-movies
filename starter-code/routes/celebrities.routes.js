const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')



/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    console.log(celebrities)
    res.render('celebrities/index', {
      celebrities
    });
  })
  .catch(err=>{
    next()
    return err
  })
});


router.get('/:id', (req,res)=>{
  Celebrity.findById(req.params.id)
  .then(celebrity=>{
    console.log(celebrity)
    res.render('celebrities/show', {celebrity})
  })
})

module.exports = router;
