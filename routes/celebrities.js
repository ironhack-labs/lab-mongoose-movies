const express = require('express');
const celebritiesModel = require('../models/celebrity');
const router = express.Router();

/* GET celebrities page */

router.get('/', (req, res, next) => {
  celebritiesModel.find()
    .then((celebrities) => {
      res.render('celebrities', { celebrities });
    })
    .catch((error) => {
      console.error(error);
      next(() => error);
    });
});

/* GET new celebrity */

router.get('/new', (req, res, next) => {
  console.log('I am in new');
  res.render('celebrities/new');
});

/* GET celebrity page */

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  celebritiesModel.findById(id)
    .then((data) => {
      res.render('celebrities/show', { data });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
