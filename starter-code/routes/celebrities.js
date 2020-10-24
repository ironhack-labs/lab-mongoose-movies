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

  router.get('/:id', async (req, res, next) => {
    try{
      let respuesta2 = await Celebrity.findById(req.params.id)
      console.log(respuesta2)
        res.render('celebrities/show', {respuesta2});
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  }); 

  router.get('/new', async (req, res, next) => {
    try{
      let respuesta2 = await Celebrity.findById(req.params.id)
      console.log(respuesta2)
        res.render('celebrities/new', {respuesta2});
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  }); 

  module.exports = router;