const express = require('express');
const Celebrity = require('../models/celebrity')
const router  = express.Router();

router.get('/celebrities', async (req,res,next)=>{
  const celebrities = await Celebrity.find();
  res.render('celebrities/index', {celebrities});
});

router.get('/celebrities/:id', async (req,res,next)=>{
    const celebrity = await Celebrity.findById(req.params.id);
    res.render('celebrities/show', {celebrity});
  });

module.exports = router;
