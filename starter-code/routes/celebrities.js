const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

/* GET products listing. */

router.get('/', (req, res, next) => {

  Celebrity.find({})
    .then((celebrities) => {
      res.render('celebrities/celebrities', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
