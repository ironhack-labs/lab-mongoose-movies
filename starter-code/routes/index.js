const express = require('express');
const router  = express.Router();
const celebController = require('../controllers/celeb.controller');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', celebController.list)

module.exports = router;
