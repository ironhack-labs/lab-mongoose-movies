const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('celebrities/index', { title: 'Celebrities', celebrities });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, ocupation, catchPhrase } = req.body;
    await Celebrity.create({ name, ocupation, catchPhrase });
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/new', async (req, res, next) => {
  try {
    res.render('celebrities/new', { title: 'New' });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const celebrity = await Celebrity.findById(id);
    res.render('celebrities/show', { title: 'Celebrity', celebrity });
  } catch (error) {
    res.redirect('celebrities/new');
  }
});

router.post('/:id/delete', async (req, res) => {
  try {
    const { id } = req.params;
    await Celebrity.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    res.redirect('celebrities/new');
  }
});

router.get('/:id/edit', async (req, res) => {
  try {
    const { id } = req.params;
    const celebrity = await Celebrity.findById(id);
    res.render('celebrities/edit', { title: 'Celebrity', celebrity });
  } catch (error) {
    res.redirect('celebrities/new');
  }
});

router.post('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, ocupation, catchPhrase } = req.body;
    console.log(name, ocupation, catchPhrase);
    await Celebrity.findByIdAndUpdate(id, { name, ocupation, catchPhrase });
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
