const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

/* GET products listing. */
router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      console.log(celebrities);
      res.render('celebrities/index', { celebrities });
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(next);
});

module.exports = router;
