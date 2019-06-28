const express = require('express');
const router  = express.Router();
const {findCelebs} = require('../controller/celeb.controller')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*GET celebrities route  */
router.get('/celebrities', findCelebs)

module.exports = router;
