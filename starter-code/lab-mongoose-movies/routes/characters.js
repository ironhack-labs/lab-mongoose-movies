

const express = require('express');
const router  = express.Router();

/* GET charecters page */
router.get('/characters', (req, res, next) => {
  res.render('characters/characters-home');
});

module.exports = router;