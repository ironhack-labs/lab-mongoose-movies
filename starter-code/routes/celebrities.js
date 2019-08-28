const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const Celebrity = require('../models/Celebrity');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('../views/celebrities/index.hbs', { celebrities });
    })
    .catch(err => {
      next();
      console.log(err);
    })
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const celebrityCreated = await Celebrity.findById(id);
    res.render('../views/celebrities/show.hbs', celebrityCreated);
  } catch (err) {
    next();
    console.log(err);
  }
});

router.get('/new', (req, res, next) => {
  res.render('../views/celebrities/new.hbs');
});

router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb =  new Celebrity({ name, occupation, catchPhrase });
  newCeleb.save()
    .then((celeb) => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(err);
      res.render('../views/celebrities/new.hbs');
    });
});

router.post('/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    const celebrityDeleted = await Celebrity.findByIdAndRemove(id);
    res.redirect('/celebrities');
  } catch (err) {
    next();
    console.log(err);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  try {
    const celebrityFound = await Celebrity.findById(id);
    res.render('../views/celebrities/edit.hbs', celebrityFound);
  } catch (err) {
    next();
    console.log(err);
  }
});

router.post('/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  try {
    const celebrityUpdated = await Celebrity.update({ _id: id }, { $set: { name, occupation, catchPhrase } }, { new: true });
    res.redirect('/celebrities');
  } catch (err) {
    next();
    console.log(err);
  }
});

module.exports = router;
