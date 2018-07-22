var express = require('express');
var router = express.Router();
const Celebrities = require('../models/celebrity')


/* GET celebrities listing. */
router.get('/', function(req, res, next) {
  Celebrities.find({})
  .then(celebrities=>{
    console.log(celebrities)
    res.render('celebrities/index', {celebrities});
  })
  .catch(error=>{
    next(error)
  })
});

/* GET details of one celebrity . */
router.get('/:id', function(req, res, next) {
  id=req.params.id
  Celebrities.findById(id)
  .then(celebrity=>{
    console.log(celebrity)
    res.render('celebrities/show', celebrity);
  })
  .catch(error=>{
    next(error)
  })
});

// New celebrity
router.post('/celebrities/new', function(req,res,next){

  res.render('/celebrities/new')
  .then(celebrity=>{
    console.log(celebrity)
  })
  .catch(error=>{
    next(error)
  })
})

//delete celebrity
router.post('/:id/delete', function(req,res,next){
  id=req.params.id
  console.log(id)
  Celebrities.findByIdAndRemove(id)
  .then(celebrity=>{
    console.log(celebrity)
    res.redirect('/celebrities');
  })
  .catch(error=>{
    next(error)
  })
})

module.exports = router;