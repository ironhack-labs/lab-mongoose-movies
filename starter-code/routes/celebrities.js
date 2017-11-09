const express = require('express');
const Celebrities = require('../models/celebrity');

const router  = express.Router();

  router.get('/', (req, res, next) => {
    Celebrities.find((err, celebrities) => {
      if (err) { return next(err); }

      res.render('celebrities/index', {
        celebrities: celebrities
      });
    });
  });
  router.get('/:id', (req, res, next) => {
    let id = req.params.id;

    Celebrities.findById(id, (err, celebrities) => {
      res.render('celebrities/show', {
        celebrities: celebrities
      });
    });
  });

module.exports = router;
