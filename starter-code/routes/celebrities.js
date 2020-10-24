const express = require('express');
const Celebrity = require('../models/celebrity');
const router  = express.Router();


router.get('/', async (req, res, next) => {
    try{
      let respuesta = await Celebrity.find()
      console.log(respuesta)
        res.render('celebrities/index', {respuesta});
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  }); 

  router.get('/new', async (req, res, next) => {
    res.render('celebrities/new');
  });

  router.post('/new', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    const newCeleb = new Celebrity({name, occupation, catchPhrase});
    newCeleb.save()
    .then( () => {
      res.redirect('/celebrities')  
    }) 
    .catch(error =>{
      res.render('celebrities/new')
    }) 
  });

  router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then( () => {
      res.redirect('/celebrities')  
    }) 
    .catch(error =>{
      next()
    }) 
  });


  router.get('/:id', async (req, res, next) => {
    try{
      let respuesta2 = await Celebrity.findById(req.params.id)
      console.log(respuesta2)
        res.render('celebrities/show', {respuesta2});
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  }); 



  module.exports = router;