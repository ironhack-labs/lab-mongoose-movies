const express = require('express');
const router  = express.Router();

/* GET characters page */
router.get('/characters', (req, res, next) => {
  res.render('characters');
});

module.exports = router;
