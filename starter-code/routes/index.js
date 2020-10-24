const express = require('express');
const Celebrity = require('../models/celebrity')
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async (req,res,next)=>{
  const celebrities = await Celebrity.find();
  res.render('celebrities/index', {celebrities});
});

router.get('/celebrities/new', async (req, res, next)=>{
  res.render('celebrities/new');
})

router.get('/celebrities/:id', async (req,res,next)=>{
  const celebrity = await Celebrity.findById(req.params.id);
  console.log(celebrity);
  res.render('celebrities/show', {celebrity});
});

router.post('/celebrities', async(req,res,next)=>{
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase});
  await newCelebrity.save();
  res.redirect('/celebrities');
});

router.post('/celebrities/:id/delete', async(req,res,next)=>{
  await Celebrity.findByIdAndDelete(req.params.id);
  res.redirect('/celebrities');
});

router.get('/celebrities/:id/edit', async(req,res,next)=>{
  const celebrity = await Celebrity.findById(req.params.id);
  console.log(celebrity);
  res.render('celebrities/edit', {celebrity});
});

router.post('/celebrities/:id', async(req,res,next)=>{
  const {name, occupation, catchPhrase} = req.body;
  await Celebrity.update(
    {_id:req.params.id},
    {$set:{name, occupation, catchPhrase}});
  const celebrity = await Celebrity.findById(req.params.id);
  res.redirect('/celebrities');
});

module.exports = router;
