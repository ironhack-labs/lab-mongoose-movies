const express = require('express');

const router  = express.Router();

const Celebrity = require('../models/Celebrity');

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
  console.log(id)
  try {
    const celebrity = await Celebrity.findById(id);
    console.log(celebrity);
    // res.render('show', celebrity);
  } catch (err) {
    next();
    console.log(err);
  }
});

module.exports = router;
