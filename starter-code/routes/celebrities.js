const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');

//route to display celebrities
router.get('/',(req,res,next) =>{
  Celebrity.find()
  .then(celebrities => {
    res.render("celebrities/index", {celebrities});
  })
  .catch (error =>{
    console.log(error);
  })
});

//route to display celebrity details
router.get('/:id', (req,res,next)=>{
  let celId = req.param.id;
  Celebrity.findOne({'_id':celId})
  .then(celebrity =>{
    res.render("celebrities/show", {celebrity});
  })
  .catch(error => {
    console.log(error);
  });
});

//routes to add new celebrities
router.get('/new', (req, res, next) => {
  res.render("celebrities/new");
});

router.post('/new', (req,res,next) =>{
  const {name, occupation, catchPhrase} = req.body;
  const newCeleb = new Celebrity ({name, occupation, catchPhrase})
  newCeleb.save()
  .then ((celebrity) => {
    res.redirect('/');
  })
  .catch((error) => {
    console.log(error);
    next();
  });
});

//route to delete celebrity
router.post('/:id/delete', (req, res, next) =>{
  let celId = req.param.id;
  Celebrity.findByIdAndRemove ({'_id':celId})
  .then(celebrity => {
    res.redirect('/celebrities');
  })
  .catch((error)=>{
    console.log(error);
    next();
  });
});

//route to edit celebrity
router.get('/edit', (req, res, next) =>{
  res.render("celebrities/edit")
});

router.get('/:id/edit', (req, res, next) =>{
  let celId = req.param.id;
  Celebrity.findOne({_id: celId})
  .then(celebrity => {
    res.render("celebrities/edit", {celebrity});
  })
  .catch((error)=>{
    console.log(error);
    next();
  });
});

router.post('/:id', (req, res, next) =>{
  const{name, occupation, catchPhrase} = req.body;
  Celebrity.update({_id: req.params.id}, {$set: {name, occupation, catchPhrase}})
  .then((celebrity) =>{
    res.redirect('/celebrities');
  })
  .catch((error) =>{
    res.redirect('/celebrities');
  })
  .catch((error)=>{
    console.log(error);
    next();
  });
});



module.exports = router;






