const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', celebritiesController.list)


module.exports = router;

