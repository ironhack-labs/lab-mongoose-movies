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
      next(error);
    });
});

module.exports = router;
