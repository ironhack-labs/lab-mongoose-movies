const express = require('express');
const Celebrity = require('../models/celebrity');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  const title = "Celebrities"
  res.render('index', {title});
});

router.get('/celebrities', async (req, res) => {
  const celebrities = await Celebrity.find()
  res.render('celebrities/index', {celebrities})
})

module.exports = router;
