const express = require('express');
const Celebrity = require('../models/celebrities');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
      if (err) { return next(err) }

      res.render('celebrities/index', {
        celebrities: celebrities,
      });
    });
});

  router.get('/:id', (req, res, next) => {
    let id = req.params.id

    Celebrity.findById(id, (err, celebrities) => {
      res.render('celebrities/bio', {
        celebrities: celebrities
      })
    })
  });


module.exports = router;
