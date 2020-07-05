const express = require('express');
const router  = express.Router();


const Celebrity = require('../models/Celebrity.model.js')

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((celebritiesFromDb)=> res.render('celebrities/index', {celebritiesFromDb}))
  .catch((e)=> console.log(e))

  
})


module.exports = router;
