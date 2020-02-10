const express = require('express');
const router  = express.Router();
const celebrityRouter = require('./celebrities')

router.use('/celebrities', celebrityRouter)

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
