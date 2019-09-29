const express = require('express');
const router  = express.Router();
const celebrities = require('../routes/celebrities');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.use('/celebrities', celebrities);

module.exports = router;
