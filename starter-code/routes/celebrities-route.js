const express = require('express');

const {
  index,
  detail,
} = require('../controllers/celebrities-controller');

const router = express.Router();

/* GET home page */
router.get('/', index);
router.get('/:id', detail);

module.exports = router;