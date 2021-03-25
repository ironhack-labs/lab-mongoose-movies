const express = require('express');
const Celebrity = require('../models/Celebrity');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();

    res.render('celebrities', { celebrities });
  } catch (error) {
    next(error);

    return error;
  }
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('create-celebrity');
})

router.get('/celebrities/:celebrityId', async (req, res, next) => {
  try {
    const { celebrityId } = req.params;

    const celebrity = await Celebrity.findById(celebrityId);

    res.render('celebrities-details', celebrity);
  } catch (error) {
    next(error);

    return error;
  }
});

router.post('/celebrities', async(req, res, next) => {
  try {
    const { name, occupation, catchPhrase} = req.body;

    const newCelebrity = new Celebrity({
      name,
      occupation,
      catchPhrase,
    })

    await newCelebrity.save();

    res.redirect('/celebrities');
  } catch (error) {
    next(error);

    return error;
  }
})

module.exports = router;
