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

/* GET celebrity page */

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  celebritiesModel.findById(id)
    .then((data) => {
      console.log(data);
      res.render('celebrities/show', { data });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
