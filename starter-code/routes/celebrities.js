const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const colors = require('colors');

/* GET Add celebrity */
router.get('/new', (req, res, next)=>{
  try {
    (async()=>{
      res.render('celebrities/new');
    })();
  } catch (error) {
    console.log(error.message);
    next();
  }
});

/* Add celebrity */
router.post('/new', (req, res, next)=>{
  try {
    (async()=>{
      if(req.body.name && req.body.occupation && req.body.catchPhrase){
        const celebrity = new Celebrity({
          name: req.body.name,
          occupation: req.body.occupation,
          catchPhrase: req.body.catchPhrase
        });
        await celebrity.save();
        res.redirect('/celebrities');
      } else {
        res.redirect('/celebrities/new');
      }
    })();
  } catch (error) {
    console.log(error.message.red);
  }
});

/*GET All celebrities */
router.get('/', (req, res, next)=>{
    try {
      (async()=>{
        const celebrities = await Celebrity.find();
        res.render('celebrities/index', {celebrities});
      })();
    } catch (error) {
      console.log(error.message);
    }
  });

/* GET Celebrity Details */
router.get('/:id', (req, res, next)=>{
  try {
    (async()=>{
      const celebrity = await Celebrity.findById(req.params.id);
      res.render('celebrities/show', {celebrity});
    })();
  } catch (error) {
    console.log(error.message);
    next();
  }
});

/* Remove Celebrity */
router.post('/:id/delete', (req, res, next)=>{
  try {
    (async()=>{
      await Celebrity.findByIdAndRemove(req.params.id);
      res.redirect('/celebrities');
    })();
  } catch (error) {
    console.log(error.message);
    next();
  }
});

/* GET Edit Celebrity */
router.get('/:id/edit', (req,res,next)=>{
  try {
    (async()=>{
      const celebrity = await Celebrity.findById(req.params.id);
      if(!celebrity){
        res.redirect('/edit')
      }
      res.render('celebrities/edit', {celebrity});
    })();
  } catch (error) { 
  }
});

/* Update celebrity */
router.post('/:id/edit', (req,res,next)=>{
  try {
    (async()=>{
      const celebrity = await Celebrity.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.redirect('/celebrities');
    })();
  } catch (error) {
    console.log(error.message.red);
  }
});

module.exports = router;