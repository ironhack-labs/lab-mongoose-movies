const express = require('express');
const router  = express.Router();

const celebritiesRouter = require('./celebrities');

/* GET celebrity page */
router.use('/celebrities',celebritiesRouter);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
