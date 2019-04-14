const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');


router.get('/', (req,res, next)=> {
  Celebrity.find()
  .then( celebrities => {
    res.render('celebrities/index', {celebrities});
  })
  .catch((err)=>{
    console.log(err);
  }); 
});

router.get('/:id', (req,res, next)=> {
  Celebrity.findById(req.params.id)
  .then( celebrity => {
    res.render('celebrities/show', celebrity);
  })
  .catch((err)=>{
    console.log(err);
  }); 
});

router.get('/new', (req,res, next)=> {
  console.log('New get');
  res.render('celebrities/new');
});

router.post("/", (req, res, next) => {
  let { name, occupation, catchPhrase } = req.body;
  if (name !== "") {
    Celebrity.create({ name, occupation, catchPhrase }).then(() =>
      res.redirect('/celebrities')
    );
  }
  let err = 'No se ha podido crear tu celebrity';
  res.render("celebrities/new", err);
});


module.exports = router;