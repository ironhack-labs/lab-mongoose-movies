const express = require('express');
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

router.get('/celebrities/:id/edit', (req, res) => {
  Celebrity.findById({ _id: req.params.id })
    .then((celebrity) => res.render('celebrities/edit', celebrity))
    .catch(() => { throw Error('Try again.'); });
});

router.post('/celebrities/:id/delete', (req, res) => {
  Celebrity.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.redirect('/celebrities'))
    .catch(() => { throw Error('Cannot be deleted.'); });
});

router.post('/celebrities/:id', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity
    .update({ _id: req.params.id }, { name, occupation, catchPhrase })
    .then(() => { res.redirect('/celebrities'); next(); })
    .catch(() => res.render('celebrities/edit', { error: 'Cannot update the celebrity.' }));
});

router.get('/celebrities/:id', async (req, res) => {
  const celebrity = await Celebrity.findById({ _id: req.params.id });
  if (!celebrity) {
    throw Error('No celebrity found.');
  } else {
    return res.render('celebrities/show', celebrity);
  }
});

router.post('/celebrities', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((celebrity) => res.redirect('celebrities')) // URL
    .catch(() => res.render('/celebrities/new')); // .hbs para mostrar
});

module.exports = router;
