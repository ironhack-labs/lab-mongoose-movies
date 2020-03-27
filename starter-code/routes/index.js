const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('celebrities/index', { 'celebrities': celebrities });
  } catch (err) {
    next();
    console.log('Falha catastrófica');
  }
});

router.get('/celebrities/:id', async (req, res, next) => {
  try {
    const celebrity = await Celebrity.findById(req.params.id);
    res.render('celebrities/show', {celebrity});
  } catch (err) {
    next();
    console.log('Falha catastrófica');
  }

});

module.exports = router;
