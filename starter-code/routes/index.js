const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async (req, res, next) => {
  await Celebrity.find();
  res.render('/celebrities/list', {
    celebrity
  })
})
module.exports = router;
