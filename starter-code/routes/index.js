const express = require('express');
const router  = express.Router();
const routeCelebrities = require('./celebrities')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', routeCelebrities);
router.post('/celebrities', routeCelebrities);
router.get('/celebrities/:id', routeCelebrities);

module.exports = router;
