const express = require('express');
const { route } = require('.');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('celebrities/index', { celebrities }))
    .catch(() => { throw Error('No celebrities found.'); });
});

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', async (req, res) => {
  console.log('_id', req.params.id);
  const celebrity = await Celebrity.findById({ _id: req.params.id });
  if (!celebrity) {
    throw Error('No celebrity found.');
  } else {
    res.render('celebrities/show', celebrity);
  }
});

router.post('/celebrities', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((celebrity) => res.redirect('celebrities')) // URL
    .catch(() => res.render('/celebrities/new')); // .hbs para mostrar
});

module.exports = router;
