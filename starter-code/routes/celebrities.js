const Celebrity = require("../models/celebrity");

const express = require('express');
const router  = express.Router();

/* GET CELEBRITIES page */

router.get('/', async (req, res, next) => {
    try{
      let celebrity = await Celebrity.find()
        res.render('celebrities/index', {celebrity});
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });

  router.get('/new', async (req, res, next) => {
    res.render("celebrities/new")
  });

  router.post('/new', async (req, res, next) => {
    try{
      const { name, occupation, catchPhrase } = req.body
      //await Celebrity.findById(req.params.id)
      const celebrity = new Celebrity({ name, occupation, catchPhrase })
      const newCelebrity = await celebrity.save();
      res.redirect("/celebrities");
    }catch(err){
        res.render("celebrities/new")
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });


  router.get('/:id', async (req, res, next) => {
    try{
      let celebrity = await Celebrity.findById(req.params.id)
        res.render('celebrities/show', {celebrity});
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });

  router.post('/:id/delete', async (req, res, next) => {
    try{
      let celebrity = await Celebrity.findByIdAndRemove(req.params.id)
      res.redirect("/celebrities");
    }catch(err){
        next()
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });

module.exports = router;