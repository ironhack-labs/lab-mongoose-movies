const express = require('express');
const router  = express.Router();

const celebrityRouter = require('./celebrities')
const movieRouter = require('./movies')

router.use('/celebrities', celebrityRouter)
router.use('/movies', movieRouter)

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;