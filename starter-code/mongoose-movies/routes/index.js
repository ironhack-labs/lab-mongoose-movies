const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

const movieRouter = require('./movies');
router.use(movieRouter);

const celebrityRouter = require('./celebrities');
router.use(celebrityRouter)


module.exports = router;
