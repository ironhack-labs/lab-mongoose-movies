const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js'); // <== add this line

/* GET home page */
router.get('/celebrity', (req, res, next) => {
  

  Celebrity.find()
  .then(celebrities => {
  
   console.log('Retrieved celebrities from DB:', JSON.stringify(celebrities));
   res.render('celebrity/index',{celebrities});//normalize{}
  })
  .catch(error => {
    next(error);
  })


});

router.get('/celebrity/:id', (req, res, next) => {
  console.log(req.params.id+ "cocococo");

  Celebrity.findById(req.params.id)
  .then(celebrity => {
  
   console.log('Retrieved celebrities from DB:', JSON.stringify(celebrity));
   res.render('celebrity/show',{celebrity});//normalize{}
  })
  .catch(error => {
    next(error);
  })


});

router.get('/celebrity/add/new', (req, res, next) => {

  res.render('celebrity/new');//normalize{}



});

router.post('/celebrity/add', (req, res, next) => {

  const { name, occupation,catchPhrase } = req.body;
  const celebrity = new Celebrity({ name, occupation, catchPhrase})
  celebrity.save()
  .then((celebrity) => {
    res.redirect('/celebrity');
  })
  .catch((error) => {
    console.log(error);
  })


});

router.post('/celebrity/:id/delete', (req, res, next) => {

  
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect('/celebrity');
  })
  .catch((error) => {
    console.log(error);
  })


});

router.get('/celebrity/:id/edit', (req, res, next) => {


  
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render('celebrity/edit',{celebrity});//normalize{}
  })
  .catch((error) => {
    console.log(error);
  })





});


router.post('/celebrity/:id/edit', (req, res, next) => {

  const { name, occupation, catchPhrase} = req.body;
  Celebrity.update({_id: req.params.id}, { $set: {name, occupation, catchPhrase}})
  .then((celebrity) => {

    res.redirect('/celebrity');
  })
  .catch((error) => {
    console.log(error);
  })


});








module.exports = router;
