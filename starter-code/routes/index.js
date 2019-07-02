const express = require('express');
const router  = express.Router();
const { findCelebrity } = require('../controllers/celebrities.controller')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET celebrities page */
router.get('/celebrities', findCelebrity)

/* GET single celebrity page */
router.get('/celebrities/:id', )

module.exports = router;
