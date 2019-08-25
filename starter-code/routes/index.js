const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async (req, res) => {
  const celebritys = await Celebrity.find();
  res.render('celebrities/index', { celebritys } );
})

router.get('/celebrities/:celebritiesId', async (req, res) => {
  const { celebritiesId } = req.params;
  const uniqueCelebrities = await Celebrity.findById(celebritiesId);
  console.log(uniqueCelebrities)
  res.render('celebrities/show', {uniqueCelebrities});
})

module.exports = router;
