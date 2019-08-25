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
    const celebrity = await Celebrity.findById(id);
    res.render('../views/celebrities/show.hbs', celebrity);
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

module.exports = router;
