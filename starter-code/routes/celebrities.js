const express = require('express');
const router  = express.Router();
const Celebrity = require(`../models/Celebrity`)

router.get('/', (req, res, next) => {
  Celebrity.find().then((allCelebs) =>{
  res.render('celebrities/index', {allCelebs});
  })
});

module.exports = router;
