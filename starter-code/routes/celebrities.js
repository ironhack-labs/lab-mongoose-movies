const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');


router.get('/', (req, res, next) => {
  Celebrity.find().exec((err, celebrities)=>{
    res.render('celebrities/index',{
      celebrities : celebrities,
    })
    if(err){return next(err);}
  })
});


router.get('/celebrities/:id', (req,res) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, Celebrity) => {
    if (err) { return next(err); }
      res.render('celebrities/show', { Celebrity: Celebrity});
    });
});

router.get('/new', (req,res) => {
  res.render('celebrities/new');
});

router.post('/',(req,res,next)=>{
  const{name,occupation,catchPhrase} = req.body;
  const celebrity = new Celebrity({name,occupation,catchPhrase});
  celebrity.save(err=>{
    if(err){return next(err)}
    res.redirect('/');
  })
})

module.exports = router;