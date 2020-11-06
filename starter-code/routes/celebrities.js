const express = require('express');
const { route } = require('.');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', async (req, res, next) => {
  const celebrities = await Celebrity.find();
  if (!celebrities) {
    throw Error('No celebrities found.');
  } else {
    res.render('celebrities/index', { celebrities });
  }
  next();
});

router.get('/celebrities/:id', async (req, res) => {
  const celebrity = await Celebrity.findById(req.params._id);
  if (!celebrity) {
    throw Error('No celebrity found.');
  } else {
    res.render('celebrities/show', celebrity);
  }
});

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
});

router.post('/celebrities', async (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  /* 
    un await para esperar y directamente
    se manda un método create con los datos nuevos.
    Igual que el seed pero solo que en este momento será con esta data.
  */

});

module.exports = router;
