const express = require('express');
const Celebrity = require('../models/Celebrity');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();

    res.render('celebrities/celebrities-list', { celebrities });
  } catch (error) {
    return next(error);
  }
});

router.get('/celebrities/new', async (req, res, next) => {
  try {
    res.render('celebrities/add-celebrity');
  } catch (error) {
    return next(error);
  }
});

router.get('/celebrities/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const celebrity = await Celebrity.findById(id);

    res.render('celebrities/celebrities-detail', celebrity);
  } catch (error) {
    return next(error);
  }
});

router.post('/celebrities', async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;

    if (!name || !occupation || !catchPhrase) {
      res.render('celebrities/add-celebrity', { errorMessage: 'Please input values to the fields' });

      return;
    }

    const newCelebrity = new Celebrity({ name, occupation, catchPhrase });

    await newCelebrity.save();

    await res.redirect('/celebrities');
  } catch (error) {
    return next(error);
  }
});

router.post('/celebrities/:id/delete', async (req, res, next) => {
  try {
    const { id } = req.params;

    await Celebrity.findByIdAndDelete(id);

    res.redirect('/celebrities');
  } catch (error) {
    return next(error);
  }
});

router.get('/celebrities/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;

    const celebrity = await Celebrity.findById(id);

    res.render('celebrities/edit-celebrity', { celebrity });
  } catch (error) {
    return next(error);
  }
});

router.post('/celebrities/:id', async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    const { id } = req.params;

    if (!name || !occupation || !catchPhrase) {
      const celebrity = await Celebrity.findById(id);
      res.render('celebrities/edit-celebrity', { celebrity, errorMessage: 'Please input values to the fields' });

      return;
    }

    await Celebrity.findByIdAndUpdate(id, { $set: { name, occupation, catchPhrase } });

    await res.redirect('/celebrities');
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
