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
    res.render('celebrities/show', { celebrity });
  } catch (err) {
    next();
    console.log('Falha catastrófica');
  }
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities', async (req, res, next) => {
  try {
    await new Celebrity({ ...req.body }).save();
    res.redirect('/celebrities');
  } catch (err) {
    res.render('celebrities/new');
    console.log('Falha catastrófica');
  }
});

router.post('/celebrities/:id/delete', async (req, res, next) => {
  try {
    await Celebrity.findByIdAndRemove(req.params.id);
    res.redirect('/celebrities');
  } catch (err) {
    next();
    console.log('Falha catastrófica');
  }
});

router.get('/celebrities/:id/edit', async (req, res, next) => {
  try {
    const celebrity = await Celebrity.findOne({ '_id': req.params.id });
    res.render('celebrities/edit', celebrity);
  } catch (err) {
    next();
    console.log('Falha catastrófica');
  }
});

router.post('/celebrities/:id', async (req, res, next) => {
  //passo 6
});

module.exports = router;
