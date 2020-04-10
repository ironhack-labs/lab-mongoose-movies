const express = require('express');
const router  = express.Router();

const celebsRouter = require("./celebrities");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.use('/celebrities', celebsRouter );

module.exports = router;