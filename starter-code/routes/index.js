const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')
/* GET home page */
router.get('/', (req, res, next) => {
 res.render('index')
});

router.get('/celebrities',(req,res,next)=>{
  Celebrity.find()
  .then(celebrity =>{
    res.render('celebrities/index', {celebrity});
  })
})

router.get('/celebrities/new', (req,res,next)=>{
  res.render('celebrities/new')
})

router.post('/celebrities/new', (req,res,next)=>{
  const {name,occupation,catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name,occupation,catchPhrase})
  newCelebrity.save()
    .then((celebrity)=>{
      res.redirect('/celebrities/')
    })
    .catch(err=>console.log(err))
})

router.get('/celebrities/:id',(req,res,next)=>{
  Celebrity.findById(req.params.id)
    .then(celebrityInfo => {
      res.render('celebrities/show', {celebrityInfo})
    })
})

module.exports = router;
