const express = require('express');
const Celebrity = require('../models/Celebrity');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();

    res.render('celebrities-views/celebrities', { celebrities })
  } catch(error) {
    next(error);
    
    return error; 
  }
});

router.get('/new', (req, res, next) => {
  res.render('celebrities-views/create-celebrity');
});

router.get('/:celebId', async (req, res, next) => {
  try {
    const { celebId } = req.params;
    const celebrity = await Celebrity.findById(celebId);

    res.render('celebrities-views/celebrities-detail', celebrity )
  } catch(error) {
    next(error);
    
    return error; 
  }
});


router.post('/', async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;

    const newCeleb = new Celebrity({
      name,
      occupation,
      catchPhrase,
    });

    await newCeleb.save();

    res.redirect('/celebrities')
  } catch(error) {
    res.render('celebrities-views/create-celebrity', { errorMessage: 'Deu ruim, tente novamente!'})
  }
});

router.post('/:celebId/delete', async (req, res, next) => {
  try {
    const { celebId } = req.params;
    
    await Celebrity.findByIdAndDelete(celebId);

    res.redirect('/celebrities')
  } catch(error) {
    next(error);

    return error;
  }
});

router.get('/:celebId/edit', async (req, res, next) => {
  try {
    const { celebId } = req.params;
    
    const celebrity = await Celebrity.findById(celebId);

    res.render('celebrities-views/celebrities-edit', celebrity);
  } catch(error) {
    next(error);

    return error;
  }
});

router.post('/:celebId', async (req, res) => {
  try {
    const { celebId } = req.params;
    const { name, occupation, catchPhrase } = req.body;

    await Celebrity.findByIdAndUpdate(celebId, { $set: { name, occupation, catchPhrase } });

    res.redirect('/celebrities')
  } catch(error) {
    next(error);

    return error;
  }
});


module.exports = router;
