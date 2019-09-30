const express = require('express');
const celebrities = require('../routes/celebrities');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.use('/celebrities', celebrities);

module.exports = router;
